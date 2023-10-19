<template>
    <form>
        <div>
        <label for="title">Title:</label>
        <input id="title" type="text" :value="title" @change="onChangeTitle($event)">
    </div>
        <div>
        <label for="content">Content:</label>
        <textarea id="content" :value="content" @change="onChangeContent($event)"></textarea>
    </div>
        <div>
        <label for="complete">Complete:</label>
        <input id="complete" type="checkbox" :checked="!!complete" @change="onChangeComplete($event)">
    </div>
    </form>
</template>

<script>
export default {
    props: ['title', 'content', 'complete', 'id'],
    methods: {
        onChangeTitle(event) {
            this.$store.commit('update_todo', {title: event.target.value})
        },
        onChangeContent(event) {
            this.$store.commit('update_todo', {content: event.target.value})
        },
        onChangeComplete(event) {
            this.$store.commit('update_todo', {complete: event.target.checked})
        }
    }
}
</script>

<style scoped>
form {
    border: 1px solid coral;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

div {
    padding: 10px;
    display: flex;
}

label {
    width: 80px;
}

#complete {
    margin: 0;
    width: 20px !important;
}
</style>