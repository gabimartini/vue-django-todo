<template>
    <div class="main">
        <div class="wrap">
            <h2> {{ title.toUpperCase() }}</h2>
            <p><span>Content: </span>{{ content }}</p>
            <p><span>Completed: </span>{{ !!complete }}</p>
        </div>
    </div>
    <button @click="onEdit()">Edit</button>
    <div v-if="isEdit">
        <the-edit></the-edit>
    </div>
    <p v-if="message !== ''" class="message">{{ message }}</p>
</template>

<script>
import TheEdit from '../components/TheEdit.vue'

    export default {
        components: {
            TheEdit
        },
        computed: {
            id() {
                return this.$route.params.id
            },
            title() {
                return this.$store.state.title
            },
            content() {
                return this.$store.state.content
            },
            complete() {
                return this.$store.state.complete
            },
            isEdit() {
            return this.$store.state.isEdit
        },
        message() {
            return this.$store.state.deletedMessage
        }
        },
        methods: {
        onEdit() {
            this.$store.dispatch('editTask')
        }
    },
        created() {
            this.$store.dispatch('getById', this.id)
        }

    }
</script>

<style scoped>
    .main {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .wrap {
        border: 1px solid coral;
        width: 30%;
        padding: 20px;
    }   
    span {
        font-weight: bold;
        font-size: 18px;
    }

    button {
        border: 2px solid coral;
        background-color: coral;
        color: white;
        width: 70px;
        height: 40px;
        cursor: pointer;
    }

</style>