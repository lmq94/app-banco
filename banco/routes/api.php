<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CuentaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('cuentas', [CuentaController::class, 'index']);
Route::get('cuentas/{id}', [CuentaController::class, 'show']);
Route::post('cuentas',[CuentaController::class, 'store']);
Route::delete('cuentas/{id}',[CuentaController::class, 'destroy']);
Route::put('cuentas/{id}',[CuentaController::class,'update']);

