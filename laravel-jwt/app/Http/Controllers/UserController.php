<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller{
    
    public function addLike(){
        
        return response()->json([
            "status" => "added Like"
        ]);
    }

}
