<template>
    <div>
        <form action="http://127.0.0.1:8000/api/posts/comment/" method="POST">
            <input v-model="name" type="text" name="user" placeholder="Name: Example1232324">
            <textarea v-model="comment" name="comment" id="" cols="20" rows="5" placeholder="Comment..."></textarea>
            <input type="text" class="notsee" name="url" v-model="url">
            <input type="text" class="notsee" name="post_id" v-model="post">
            <button type="submit">Vai</button>
        </form>
        <div v-for="comment in xec.comments" :key="comment.id">
            <p> {{comment.user}}</p>
            <p>{{comment.comment}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        post: Number,
    },
    data() {
        return {
            xec: null,
            name : "",
            comment: "",
            post_id : this.post,
            url : this.$route.params.slug,
            urlApi: "/api/posts/show/",
        }
    },
    mounted() {
        axios.get(this.urlApi + this.$route.params.slug)
        .then(r=>{
            console.log(r.data)
            this.xec = r.data
        })
    },
}
</script>

<style lang="scss" scoped>
    div{
        max-width: 500px;
        margin: 50px auto;

        input,textarea{
            display: block;
            margin-top: 20px;
            padding: 20px;
            width: 100%;
            resize: none;
            border-radius: 10px;
            border-width: 0;
            font-size: 1rem;
        }

        button{
            padding: 10px;
            width: 100%;
            margin-top: 20px ;
        }
        .notsee{
            display: none;
        }
    }
</style>
