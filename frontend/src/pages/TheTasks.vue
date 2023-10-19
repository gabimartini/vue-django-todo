

<template>
    <div class="main">
        <h1>Your Tasks</h1>
        <div class="header">
            <div class="wrap"><p>Title</p></div>
            <div class="wrap"><p></p></div>
            <div class="wrap"><p></p></div>
        </div>
        <the-list
        v-for="todo in todos" 
        v-bind:key="todo.id"
        :id="todo.id"
        :title="todo.title"
        ></the-list>
    </div>
    <div v-if="isEdit">
        <the-edit></the-edit>
    </div>
    <p v-if="message !== ''" class="message">{{ message }}</p>
</template>

<script>
import TheList from "../components/TheList.vue"
import TheEdit from '../components/TheEdit.vue'

export default {
    components: {
        TheList,
        TheEdit
    },
    computed: {
        todos() {
            return this.$store.state.todos
        },
        isEdit() {
            return this.$store.state.isEdit
        },
        message() {
            return this.$store.state.deletedMessage
        }
    },
    created() {
        this.$store.dispatch('getAllTasks')
    }
}
</script>

<style scoped>
.main {
    margin: 0 20rem;
}
h1 {
    color: coral;
    text-align: center;
    margin-top: 40px;
}
.header {
    border-bottom: 2px solid coral;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.wrap {
    width: 15rem;
}

.message{
        width: 200px;
        background-color: green;
        color: white;
        text-align: center;
        padding: 10px 0;
    }

</style>