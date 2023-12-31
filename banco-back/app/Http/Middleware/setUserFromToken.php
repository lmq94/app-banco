<?php

namespace App\Http\Middleware;

use App\Models\Token;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class setUserFromToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->hasHeader("api-key")) return new Response("Forbidden",403);


        $tokenValue = $request->header("api-key");


        $userId = Token::all()->where('valor', md5($tokenValue))?->first()?->getAttribute("user");

        if (!$userId) return  new Response("Forbidden",403);

        $user = User::all()->find($userId);

        if(!$user) return new Response("Forbidden",403);

        $request->offsetSet('user', $user);

        return $next($request);
    }
}
