<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Item;

class AdminController extends Controller{

    public function store(Request $request){
        $price = $request->price;
        $name = $request->name;
        $offer = $request->offer;
        if($price !== null && $name !== null && $offer !== null){
            $item = new Item;
            $item->name = $name;
            $item->price = $price;
            $item->offer = $offer;
            $item->image = 'not available';
            $item->save();
            return response()->json([
                "status" => "Success",
                "message" => "Item added successfully",
                "item" => $item
            ]);
        }
        return response()->json([
            "status" => "error",
            "message" => "Please give all the information"
        ]);
    }

    public function destroy(Request $request){
        $id = request('id');
        $item = new Item;
        $item = Item::find($id);
        if($item){
            $item->delete();
            return response()->json([
                "status" => "Item deleted",
                "id" => $item
            ]);
        }
        return response()->json([
            "status" => "Item not found",
        ]);
    }
}
