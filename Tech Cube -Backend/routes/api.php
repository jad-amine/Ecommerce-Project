<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\AuthController;

// For JWT controller 
// Route::controller(AuthController::class)->group(function () {

    Route::group(['prefix' => 'v1'], function(){
        //Landing Page API
        Route::get('/', [HomepageController::class, 'getSomeItems']);

        // Users Routes
        Route::group(['prefix' => 'user'], function(){
            // Unauthenticated API
            Route::get('/login', [UserController::class, 'login']);  
            Route::post('/signUp', [UserController::class, 'signUp']);
            });
        
        // Items Routes
        Route::group(['prefix' => 'item'], function(){
            // Unauthenticated API
            Route::get('/offers', [ItemController::class, 'getOffers']);
            Route::get('/{id?}', [ItemController::class, 'getItem']);
            });

        // Admin Routes
        Route::group(['prefix' => 'admin'], function(){
            // Authenticated & Authorized API
            Route::group(['middleware' => 'role.admin'], function(){
            Route::get('/{id?}', [UserController::class, 'getAllUsers']);
            Route::post('/addItem', [ItemController::class, 'addItem']);
            });
        });
});