<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller{

    public function index($id = null){
        if(!id){
            $items = Item::all();
        } else{
            $items = Item::find($id);
        }

        return response()->json([
            "status" => "success",
            "items" => $items
        ]);
    }

    public function __construct(){
        $this->middleware('auth:api');
    }

}
