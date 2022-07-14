<template>
    <div>
        <header-comp></header-comp>
        <main>

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
            <div class="pages">
                <button
                    @click="getApi(nowPage - 1)"
                    :disabled="nowPage === 1"
                >Back</button>
                <button
                    @click="getApi(i)"
                    class="minicards"
                    v-for="i in lastPage"
                    :key="i"
                    :disabled="nowPage === i"
                    :class=" (nowPage === i)? 'active': ''"
                >
                {{i}}
                </button>
                <button
                    @click="getApi(nowPage + 1)"
                    :disabled="nowPage === lastPage"
                    :class=" (nowPage === lastPage)? 'active': ''"
                >Next</button>
                <button
                    @click="getApi(lastPage)"
                    :class=" (nowPage === lastPage)? 'active': ''"
                    :disabled="nowPage === lastPage"
                >Last page</button>
            </div>

        </main>
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
            urlGet: "/api/posts",
            urlPut: "/api/posts/update",
            postsData : [],
            lastPage : null,
            nowPage: null
        }
    },
    methods: {
        getApi(page){
            Axios.get(this.urlGet, {
                params:{
                    page : page
                }
            })
            .then(r=>{
                console.log(r.data)
                this.postsData = r.data.data
                this.lastPage = r.data.last_page
                this.nowPage = r.data.current_page
                console.log(this.postsData)
                console.log(this.lastPage)
                console.log(this.nowPage)
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
        this.getApi(1)
    }
}
</script>

<style lang="scss">


.container{
    color: black;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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

.pages{
    padding: 20px;

    button{
        padding: 15px;
        margin: 0 10px;
        background-color: yellowgreen ;
        font-weight: bolder;
        border-width: 0;
        &:hover,
        &.active{
            background-color: rgba(153, 205, 50, 0.413);
        }
    }
}
</style>
