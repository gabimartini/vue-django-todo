<template>
    <div class="mainWrap">
        <div class="wrap">
            <h1>Add Task</h1>
            <the-form></the-form>
            <button @click="onAdd()">Add New Task</button>
            <p v-if="message">{{ message }}</p>
        </div>
    </div>
</template>

<script>
        import TheForm from "../components/TheForm.vue"
    export default {
        components: {
            TheForm
        },
        methods: {
            onAdd() {
                this.$store.dispatch('addTask')
            }
        },
        computed: {
            message() {
                return this.$store.state.addedMessage
            }
    },
    }
</script>

<style scoped>
    .mainWrap {
        display: flex;
        justify-content: center;

    }
    .wrap {
        width: 30%;
    }
    h1 {
        text-align: center;
    }
    button {
        background-color: coral;
        border: 2px solid coral;
        color: white;
        padding: 10px;
        margin-top: 20px;
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(224, 157, 132);
        border-color: rgb(224, 157, 132);
    }

    p {
        width: 100px;
        border: 2px solid green;
        background-color: green;
        padding: 10px;
        color: white;
        text-align: center;
    }
</style>