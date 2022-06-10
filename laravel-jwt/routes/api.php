<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\AdminController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});


Route::controller(ItemController::class)->group(function () {
    Route::get('items/{id?}', 'index');
    Route::get('offer/{id?}', 'offer');
}); 

// User like items


Route::middleware("role.user")->group(function(){
    Route::controller(UserController::class)->group(function () {
        Route::post('like', 'addLike');
    }); 
});

Route::middleware("role.admin")->group(function(){
    Route::controller(AdminController::class)->group(function () {
        Route::post('item', 'store');
        // Route::get('item/{id}', 'show');
        Route::put('item/{id}', 'update');
        Route::delete('item/{id}', 'destroy');
    }); 
});