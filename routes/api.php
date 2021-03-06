<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('posts', 'Api\PostsController@index');
Route::put('posts/update/{id}','Api\PostsController@update');
Route::get('posts/show/{id}','Api\PostsController@show');
Route::get('posts/catgeroies','Api\PostsController@indexCategory');
Route::get('posts/tags','Api\PostsController@indexTag');
Route::get('posts/catgeroies/{id}','Api\PostsController@postsCategory');
Route::get('posts/tags/{id}','Api\PostsController@postsTag');
Route::post('posts/comment','Api\PostsController@createComment');
