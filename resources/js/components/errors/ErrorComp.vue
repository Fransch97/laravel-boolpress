<template>
<div>
    <header-comp></header-comp>
    <main>

        <div class="con">

            <h1>Error qualcosa è andato storto</h1>
            <img src="https://25.media.tumblr.com/tumblr_lupndd43j51qi85tlo1_500.gif" alt="">
        </div>

    </main>
    <footer-comp></footer-comp>
</div>
</template>

<script>
import FooterComp from '../partials/FooterComp.vue'
import HeaderComp from '../partials/HeaderComp.vue'
export default {
  components: { HeaderComp, FooterComp },

}
</script>

<style lang="scss" scoped>
    h1{
        color: white;
        padding: 50px;
    }

</style>
