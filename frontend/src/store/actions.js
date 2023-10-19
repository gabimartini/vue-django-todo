import axios from "axios"

const url = import.meta.env.VITE_API_ENDPOINT;

export default {
    async addTask({commit}) {
        axios.post(`${url}/add/`, {
            title: this.state.title,
            content: this.state.content,
            complete: this.state.complete
        }).then((res) => (
            commit('add_message', res.statusText),
            setTimeout(() => {
                commit('add_message', "")
            }, [600])
            ))
        .catch(e => console.log({e}))
    },
    async getAllTasks({commit}) {
        await axios.get(`${url}/tasks/`)
        .then((res)=> {
            commit('update_todos', res.data)
        })
        .catch((err)=> {
            console.log({err})
        })
    },
    async getById({commit}, id) {
        await axios.get(`${url}/tasks/${id}`)
        .then((res)=> {
            commit('update_todo', res.data)
        })
        .catch((err)=> {
            console.log({err})
        })
    },
    editTask({commit}) {
        commit('update_edit', !this.state.isEdit)
    },
    async deleteTask({commit}, id) {
        await axios.delete(`${url}/delete/${id}`)
        .then((res)=> {
            this.commit('deleted_message', res.statusText)
            setTimeout(() => {
                this.dispatch('getAllTasks')
                commit('deleted_message', "")
            }, [600])
        })
        .catch((err)=> {
            console.log({err})
        })
    },
    async editTodo({commit}, id) {
        axios.put(`${url}/update/${id}` , {
            title: this.state.title,
            content: this.state.content,
            complete: this.state.complete
        }).then(res => 
            this.commit('edited_message', res.statusText),
            setTimeout(() => {
                this.dispatch('getAllTasks')
                commit('update_edit', false)
                this.commit('edited_message', "")
            }, [600]),
            ).catch(e => console.log(e))
    }
  }