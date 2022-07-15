<?php

use App\Comment;
use App\Post;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for($i= 0; $i < 110; $i++){
            $new_comment = new Comment();
            $post = Post::inRandomOrder()->first();
            $new_comment->post_id = $post->id;
            $new_comment->user = $faker->name(); ;
            $new_comment->comment = $faker->text();;
            $new_comment->save();
        }
    }
}
