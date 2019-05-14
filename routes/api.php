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

Route::middleware('auth:api')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/clients', 'ClientController@store');
    Route::patch('/clients/{client}', 'ClientController@update');
    Route::delete('/clients/{client}', 'ClientController@destroy');
    Route::get('/clients', 'ClientController@index');
    Route::get('/clients/{client}', 'ClientController@show');
    Route::post('/logout', 'AuthController@logout');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
//get clients/show



//post clients/add/update/destroy
//Route::post('/clients', 'ClientController@store');


Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
