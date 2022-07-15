<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Comment;
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
        $post = Post::where('slug', $id)->with('comments')->first();
        return response()->json($post);
    }

    public function indexCategory(){
        $categories = Category::all() ;
        return response()->json($categories);
    }

    public function indexTag(){
        $tags = Tag::all() ;
        return response()->json($tags);
    }

    public function postsCategory($id){
        $categories = Category::where('id',$id)->with('posts')->first();
        return response()->json($categories);
    }

    public function postsTag($id){
        $tags = Tag::where('id',$id)->with('posts')->first();
        return response()->json($tags);
    }

    public function createComment(Request $request){
        $new_comment_data = $request->all();
        $new_comment = new Comment();
        $new_comment->fill($new_comment_data);
        $comments = Comment::all();
        if(empty($new_comment->user)){

            $new_comment->user = "Anonymus-" . count($comments);
        }
        $new_comment->save();
        return redirect()->away('http://127.0.0.1:8000/post/' . $request->url);
    }
}
