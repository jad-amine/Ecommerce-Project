<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Item;

class AdminController extends Controller{

    // Add item
    public function store(Request $request){
        $name = $request->name;
        $price = $request->price;
        $offer = $request->offer;
        $data = $request->image;
        $item_check = Item::where('name', "$name")->get();
        if(count($item_check) == 1){
            return response()->json([
                "status" => "error",
                "message" => "Item Already exists"
            ]);
        }
        if($price !== null && $name !== null && $offer !== null){
            $item = new Item;
            $item->name = $name;
            $item->price = $price;
            $item->offer = $offer;
            $item->image = "http://localhost:8000/$name.png";
            file_put_contents("$name.png", base64_decode($data));
            // $item->image = 'not available';
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

    // Delete item
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

    // Fetch all users
    public function getUsers(){
        $users = User::all();
        return response()->json([
            "status" => "success",
            "users" => $users
        ]);
    }
}
