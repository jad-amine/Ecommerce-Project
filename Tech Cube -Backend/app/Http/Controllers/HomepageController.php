<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomepageController extends Controller{
    
    public function getSomeItems(){
        return response()->json([
            // check localstorage for token 
            // query some items 
            "status" => "Success",
            "Items page" => 'some items + user name'
        ], 200);
    }
}