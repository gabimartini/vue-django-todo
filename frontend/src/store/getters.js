export default {
    todo: function(state) {
            const todo = {
                title: state.title,
                id: state.id,
                content: state.content,
                complete: state.complete
            }
            return todo
    }
  }