<template>
    <div>
        <!-- <h1>Posts</h1>
        <div class="container">

            <div class="card" v-for="post in postsData" :key="post.id">
                <h2>{{post.title}}</h2>
                <span v-for="tag in post.tags" :key="tag.id" >
                {{tag.name}}
                </span>
                <p>{{post.content}}</p>
                <p>{{post.likes}}</p>
                <span class="likes"
                onclick="likes(post.id)"
                >&#10084;</span>
            </div>

        </div> -->
        <router-view></router-view>

    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: "App",
    data() {
        return {
            urlGet: "http://127.0.0.1:8000/api/posts",

            urlPut: "http://127.0.0.1:8000/api/posts/update",


            postsData : [],
        }
    },
    methods: {


    },
    mounted(){
    }
}
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
    background-color: black;
    color: white;
    text-align: center;
    }

    nav{
        background: yellowgreen;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            list-style: none;
            margin: 0 30px;
            a{
                text-decoration: none;
                color: black;
                font-weight: bolder;
                font-size: 1.3rem;
                &:hover,
                &:active{
                    text-decoration: underline;
                    color: rgb(15, 69, 150);
                }
            }
        }
    }
    main{
        min-height: calc(100vh - (100px + 50px)) ;
        display: flex;
        flex-direction: column;
    }
</style>
