<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller{
    //add middleware for the action
    public function addItem(){
        // grab item specs from the request body
        // $item->name = request['name'];
        // ....
        // $item-> save;

        return response()->json([
            "status" => "success",
            "itemSaved" => "Added Item"
        ], 200);
    }

    // Unauthorized API
    public function getOffers(){
        // $items = Item::where('offer','1')->get();

        return response()->json([
            "status" => "success",
            "items" => "offer"
        ], 200);
    }

    // Unauthorized API
    public function getItem($id = null){
        if($id){
            //$items = Item::find($id);
            //get the item from db using model
        }else {
            //get all the items and return them
            // $items = Item::all();
        }

        return response()->json([
            "status" => "success",
            "items" => "1,2,3,4,5"
        ], 200);
    }
}