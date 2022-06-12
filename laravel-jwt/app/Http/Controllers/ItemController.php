<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use App\Models\ItemUser;
use Illuminate\Support\Facades\Auth;


class ItemController extends Controller{

    public function index($id = null){
        $user = Auth::user();
        if($user){
            $user = $user->items;
        }
        if(!$id){
            $items = Item::all();
        } else{
            $items = Item::find($id);
        }
        return response()->json([
            "status" => "success",
            "items" => $items,
            "user" => $user
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
