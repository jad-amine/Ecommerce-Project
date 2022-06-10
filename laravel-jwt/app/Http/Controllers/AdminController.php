<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller{

    public function store(Request $request){
        return response()->json([
            "status" => "Success"
        ]);
    }
}
