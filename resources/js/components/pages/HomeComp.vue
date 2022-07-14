<template>
    <div>
        <header-comp></header-comp>
        <h1>Posts</h1>
        <div class="container">

            <div class="card" v-for="post in postsData" :key="post.id">
                <h2>{{post.title}}</h2>
                <div class="div">
                    <span v-for="tag in post.tags" :key="tag.id" >
                    {{tag.name}}
                    </span>
                </div>
                <p class="content">{{post.content}}</p>
                <p>{{post.likes}}</p>
                <span class="likes"
                onclick="likes(post.id)"
                >&#10084;</span>
            </div>

        </div>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import Axios from 'axios'
import HeaderComp from '../partials/HeaderComp.vue'
import FooterComp from '../partials/FooterComp.vue'

export default {
  components: { HeaderComp, FooterComp },
    name: "App",
    data() {
        return {
            urlGet: "http://127.0.0.1:8000/api/posts",

            urlPut: "http://127.0.0.1:8000/api/posts/update",


            postsData : [],
        }
    },
    methods: {
        getApi(){
            Axios.get(this.urlGet)
            .then(r=>{

                console.log(r.data)
                this.postsData = r.data

            })
        },

        like(id){

            putParams = id

            Axios.put(this.urlPut,{ "id ": putParams })
            .then(r=>{

                console.log(r.data)
                this.postsData = r.data

            })


            this.getApi()
        }
    },
    mounted(){
        this.getApi()
    }
}
</script>

<style lang="scss">


.container{
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card{
        margin: 20px 20px;
        width: 250px;
        padding: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        .content{
            flex-grow: 1;
        }
        .likes{

            font-size: 30px;
            color: red;
            cursor: pointer;
            &:hover{
                font-size: 40px;
            }
        }
    }
}
</style>
