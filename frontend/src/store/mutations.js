export default {
    update_edit(state, payload) {
        state.isEdit = payload
    },
    update_todos(state, payload) {
        state.todos = payload
    },
    update_todo(state, payload) {
        const {id, title, content, complete} = payload
        state.id = id ? id : state.id;
        state.title = title ? title : state.title;
        state.content = content ? content : state.content;
        state.complete = complete !== state.complete ? complete : state.complete
    },
    edited_message(state, payload) {
        state.editedMessage = payload
    },
    deleted_message(state, payload) {
        state.deletedMessage = payload
    },
    add_message(state, payload) {
        state.addedMessage = payload
    }
}
