<template>
  <div class="right">
    <h2> Categorie </h2>
        <ul>
            <li
                v-for="category in categories"
                :key="category.id"
            >
                <a  @click="$emit('choosedCategory', category.id)">{{category.name}}</a>
            </li>
        </ul>
        <h2>Tags</h2>
        <ul>
            <li
                v-for="tag in tags"
                :key="tag.id"
                @click="$emit('choosedTag', tag.id)"
            >
                {{tag.name}}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    props:{
        categories: Array,
        tags: Array,
    }

}
</script>

<style>

</style>
