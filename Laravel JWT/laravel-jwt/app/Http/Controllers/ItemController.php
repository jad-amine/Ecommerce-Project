<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller{

    public function __construct(){
        $this->middleware('auth:api');
    }


    public function index(){
        $items = Item::all();

        return response()->json([
            "status" => "success",
            "items" => $items
        ]);
    }
}
