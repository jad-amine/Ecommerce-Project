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

// Authenticate User
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

// Fetch items
Route::controller(ItemController::class)->group(function () {
    Route::get('items/{id?}', 'index');
    Route::get('offer/{id?}', 'offer');
}); 


// User like Route
Route::middleware("role.user")->group(function(){
    Route::controller(UserController::class)->group(function () {
        Route::post('like/{id}', 'addLike');
        Route::get('getLikes', 'getLikes');
    }); 
});

// Admin Routes
Route::middleware("role.admin")->group(function(){
    Route::controller(AdminController::class)->group(function () {
        Route::get('users/{id?}', 'getUsers');
        Route::post('item', 'store');
        Route::put('item/{id}', 'update');
        Route::delete('item/{id}', 'destroy');
    }); 
});