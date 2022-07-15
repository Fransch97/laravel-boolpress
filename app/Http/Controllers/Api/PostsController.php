<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
    public function index(){
        $posts = Post::with('category')->with('tags')->paginate(5);
        return response()->json($posts);
    }

    public function update(Request $request, $id){
        $post = Post::find($id);
        $post->likes = $post->likes + 1;
        $post->update();
        return response()->json($post);
    }
}
