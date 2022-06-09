<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller{
    public function getAllUsers($id = null){
        if($id != null){
            //find the user
            // $restos = Restaurant::find($id);
        }else{
            // get all users
            // $restos = Restaurant::all();
        }
        
        return response()->json([
            "status" => "Success",
            "users" => 'get the user(s)'
        ], 200);
    }

    public function login(){
        // $user->email = request['email'];
        // $user->password = request['password'];
        // query the db for the user
        // if found login and give token
        // else return error
        return response()->json([
            "status" => "Success",
            "JWT" => 'JWT token'
        ], 200);
    }

    public function signUp(){
        // $user->name = request['name'];
        // $user->email = request['email'];
        // $user->password = request['password'];
        // $user -> save();
        return response()->json([
            "status" => "Success",
            "JWT" => 'JWT token'
        ], 200);
    }
}