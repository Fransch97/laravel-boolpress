<template>
  <div>
    <header-comp></header-comp>
    <main>
        <h1>{{card.title}}</h1>
        <p>{{card.content}}</p>
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

<style>

</style>
