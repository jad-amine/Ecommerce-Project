<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ItemUser;
use App\Models\Item;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller{
    
    public function addLike(Request $request){
        $user = Auth::user();
        $user = $user->id;
        $item = (int)$request->id;
        $previous_like = ItemUser::where('user_id', $user)->where('item_id', $item)->get();
        if(count($previous_like) == 1){
            $previous_like[0]->delete();
            return response()->json([
                "status" => "Success, like removed",
                "user" => $user,
                "previous_like" => $item,
                "hello" => $previous_like
            ]);
        }
        $itemUser = new ItemUser;
        $itemUser->user_id = $user;
        $itemUser->item_id = $item;
        $itemUser->save();

        return response()->json([
            "status" => "added Like",
            "user" => $user,
            "item" => $itemUser,
        ]);
    }

    // Many to many relationship
    public function getLikes(){
        $user = Auth::user();
        $user = $user->id;
        $likes = ItemUser::where('user_id', "$user")->get();
        if(count($likes) == 0){
            return response()->json([
                "status" => "error",
                "message" => "No likes"
            ]);
        }
        $user = User::find($user);
        $result = [];
        foreach($user->items as $item){
            $result[] = $item;
        }
        return response()->json([
            "status" => "Likes retrieved",
            "user" => $user,
            "result" => $result
        ]);
    }
}
