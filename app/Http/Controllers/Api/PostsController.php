<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Tag;

class PostsController extends Controller
{
    public function index(){
        $posts = Post::with('category')->with('tags')->paginate(2);
        return response()->json($posts);
    }

    public function update(Request $request, $id){
        $post = Post::find($id);
        $post->likes = $post->likes + 1;
        $post->update();
        return response()->json($post);
    }

    public function show($id){
        $post = Post::where('slug', $id)->first();
        return response()->json($post);
    }



}
