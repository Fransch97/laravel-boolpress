<template>
    <div>
        <header-comp></header-comp>
        <h1>Contacts</h1>
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

<style>

</style>
