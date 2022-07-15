<template>
    <div>
        <header-comp></header-comp>
        <main>

            <div class="left">
                <div v-if="norm" class="container">
                <h1 >Posts</h1>
                    <div class="cards">
                        <div  class="card" v-for="(post, index) in postsData" :key="post.id">
                            <h2 @click="showme(post.id)">
                                <router-link :to="{name: 'show', params:{slug: post.slug}}">{{post.title}}</router-link>

                            </h2>
                            <div class="div">
                                <span v-for="tag in post.tags" :key="tag.id" >
                                {{tag.name}}
                                </span>
                            </div>
                            <p class="content">{{post.content}}</p>
                            <p>{{post.likes}}</p>
                            <span class="likes"
                                @click="like(post.id, index)"
                            >
                            &#10084;
                            </span>
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
                </div>
                <div v-else class="container">
                    <h1>{{tagCatName}}</h1>
                    <div class="cards">
                        <div  class="card" v-for="post in postsData" :key="post.slag">
                            <h2 @click="showme(post.id)">
                                <router-link :to="{name: 'show', params:{slug: post.slug}}">{{post.title}}</router-link>

                            </h2>
                            <div class="div">
                                <span v-for="tag in post.tags" :key="tag.id" >
                                {{tag.name}}
                                </span>
                            </div>
                            <p class="content">{{post.content}}</p>
                            <p>{{post.likes}}</p>
                            <span class="likes"
                                @click="like(post.id, index)"
                            >
                            &#10084;
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <side-comp @choosedTag="findPostTag" @choosedCategory="findPostCat" :categories="postsCategories" :tags="poststags"></side-comp>

        </main>
        <footer-comp ></footer-comp>
    </div>
</template>

<script>
import Axios from 'axios'
import HeaderComp from '../partials/HeaderComp.vue'
import FooterComp from '../partials/FooterComp.vue'
import SideComp from '../minicomps/SideComp.vue'

export default {
  components: { HeaderComp, FooterComp, SideComp },
    name: "App",
    data() {
        return {
            urlGet: "/api/posts/",
            urlPut: "/api/posts/update/",
            sideBar:[
                    "/api/posts/catgeroies/",
                    "/api/posts/tags",
            ],
            urlShow: "/api/posts/show/",
            postsData : [],
            postsCategories : [],
            poststags : [],
            lastPage : null,
            nowPage: null,
            norm : true,
            tagCatName: null
        }
    },
    methods: {
        findPostTag(id){

            Axios.get('api/posts/tags/'+ id)
            .then(r=>{
                this.tagCatName = r.data.name
                this.postsData = r.data.posts
                this.norm = false;
                console.log(r.data.posts)
            })
        },
        findPostCat(id){
            console.log("ciao")
            Axios.get(this.sideBar[0]+ id)
            .then(r=>{
                this.tagCatName = r.data.name
                this.postsData = r.data.posts
                this.norm = false;
                console.log(r.data.posts)
            })
        },
        getApi(page){
            Axios.get(this.urlGet, {
                params:{
                    page : page
                }
            })
            .then(r=>{
                this.postsData = r.data.data
                this.lastPage = r.data.last_page
                this.nowPage = r.data.current_page
            })

            this.sideBar.forEach((e,i) => {
                Axios.get(e)
                .then(r=>{
                    if(i === 0)this.postsCategories = r.data
                    else this.poststags = r.data
                })
            });

        },
        testfunc(){
            console.log(this.sideBar[0][1])
        },
        like(id, i){
            Axios.put(this.urlPut+id)
            .then(r=>{

                const likes = r.data.likes
                const test = false
                if(likes) this.postsData[i].likes = likes;
                else this.$router.push({ name: "errLike"});


            })
            .catch(function (error) {
                console.log(error);
            });
        },
        showme(id){
            Axios.get(this.urlShow + id)
            .then(r=>{
                console.log(r.data)
            })
        },
    },

    mounted(){
        this.getApi(1)
    }
}
</script>

<style lang="scss">
h1{
    color: white;
}
.left{
    flex-grow: 1;
    flex-basis: 100%;
    .container{
        min-height:80%;
        color: black;
        flex-grow: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .cards{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
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
}

.right{
    text-align: start;
    padding: 100px;
    h2{
        padding: 20px 0 10px 0;
    }
    ul{
        li{
            list-style: none;
        }
    }
}
</style>
