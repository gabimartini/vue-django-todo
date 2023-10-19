<template>
    <div>
        <div class="wrap"><router-link :to="{name: 'task', params: {id}}">{{ title }}</router-link></div>
        <div class="wrap"><button @click="onEdit(id)">Edit</button></div>
        <div class="wrap"><button @click="onDelete(id)">Delete</button></div>
    </div>
</template>

<script>
export default {
    props: ['id','title', 'content', 'complete'],
    methods: {
        onEdit(id) {
            this.$store.dispatch('editTask')
            this.$store.dispatch('getById', id)
        },
        onDelete(id) {
            console.log(id)
            this.$store.dispatch('deleteTask', id)
        }
    }
}
</script>

<style scoped>
    div {
        display: flex;
    }
    .wrap{
        width: 15rem;
        padding: 10px 0;
        display: flex;
        align-items: center;
    }

    button {
        border: 2px solid coral;
        background-color: coral;
        color: white;
        width: 70px;
        height: 40px;
        cursor: pointer;
    }
    button:active,
    button:hover {
        background-color: rgb(224, 157, 132);
        border-color: rgb(224, 157, 132);
    }

</style>
