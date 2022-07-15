<template>
  <div>
    <header-comp></header-comp>
    <main>
        <div class="container">
            <h1>{{card.title}}</h1>
            <p>{{card.content}}</p>

        </div>
    </main>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Axios from 'axios'
import FooterComp from '../partials/FooterComp.vue'
import HeaderComp from '../partials/HeaderComp.vue'
export default {
  components: { HeaderComp, FooterComp },
  data() {
    return {
        urlApi: "/api/posts/show/",
        card : Object
    }
  },
  methods: {
    getApi(){
        Axios.get(this.urlApi + this.$route.params.slug)
        .then(r=>{
            console.log(r.data)
            this.card = r.data
        })
    }
  },
  mounted() {
    this.getApi()
  },

}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        padding: 100px;
        text-align: center;
    }
</style>
