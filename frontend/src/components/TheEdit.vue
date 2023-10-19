<template>
    <div class="mainModal">
        <div class="modal">
            <h1>Edit your task</h1>
            <button @click="onEdit">X</button>
            <the-form 
                :id=todo.id 
                :title="todo.title" 
                :content="todo.content" 
                :complete="todo.complete"
            >
            </the-form>
            <button @click="onSave()">Save</button>
            <p v-if="message !== ''">{{ message }}</p>
    </div>
    </div>
</template>

<script>
import TheForm from './TheForm.vue';
export default {
    components: {
        TheForm
    },
    computed: {
        todo() {
            return this.$store.getters['todo']
        },
        message() {
            return this.$store.state.editedMessage
        }

    },
    methods: {
        onEdit() {
            this.$store.dispatch('editTask')
        },
        onSave() {
            this.$store.dispatch('editTodo', this.todo.id)
        }
    }
}
</script>

<style scoped>
.modal {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    display: flex;
    flex-direction: column;
}

.mainModal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}

.checkbox {
    margin: 0 10px !important;
    width: 20px !important;
}

.inputGroup {
    padding: 10px;
    display: flex;
}

h1 {
    align-self: center;
}

button {
    margin: 20px 0;
    background-color: coral;
    border:2px solid coral;
    color: white;
    padding: 5px 10px;
    width: fit-content;
    align-self: flex-end;
    cursor: pointer;
    
}

p {
    width: 70px;
    background-color: green;
    color: white;
    text-align: center;
    padding: 10px 0;
}

</style>