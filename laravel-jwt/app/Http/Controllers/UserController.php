<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ItemUser;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller{
    
    public function addLike(Request $request){
        $user = Auth::user();
        $user = $user->id;
        $item = (int)$request->item_id;
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

}
