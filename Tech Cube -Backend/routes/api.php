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
        //open API
        Route::get('/', [HomepageController::class, 'getSomeItems']);

        // Users Routes
        Route::group(['prefix' => 'user'], function(){
            //open API
            Route::get('/login', [UserController::class, 'login']);  
            Route::post('/signUp', [UserController::class, 'signUp']);
            //should be only accessible by the admin (need authorization)
            Route::get('/{id?}', [UserController::class, 'getAllUsers']);
            });

        Route::group(['prefix' => 'item'], function(){
            //should be only accessible by the admin (need authorization)
            Route::post('/addItem', [ItemController::class, 'addItem']);
            //open API
            Route::get('/offers', [ItemController::class, 'getOffers']);
            //open API
            Route::get('/{id?}', [ItemController::class, 'getItem']);
            });

});