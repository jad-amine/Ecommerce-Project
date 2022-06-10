<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;


class ItemController extends Controller{

    public function index($id = null){
        if(!$id){
            $items = Item::all();
        } else{
            $items = Item::find($id);
        }
        return response()->json([
            "status" => "success",
            "items" => $items
        ]);
    }

    public function offer($id = null){
        if(!$id){
            $items = Item::where('offer', '!=', '0')->get();
        } else{
            $items = Item::find($id);
        }
        return response()->json([
            "status" => "success",
            "items" => $items
        ]);
    }

}
