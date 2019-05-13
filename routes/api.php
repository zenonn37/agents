<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//get clients/show
Route::get('/clients', 'ClientController@index');
Route::get('/clients/{client}', 'ClientController@show');

//post clients/add/update/destroy
Route::post('/clients', 'ClientController@store');
Route::patch('/clients/{client}', 'ClientController@update');
Route::delete('/clients/{client}', 'ClientController@destroy');

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
