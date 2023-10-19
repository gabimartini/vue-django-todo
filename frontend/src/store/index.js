import { createStore } from 'vuex'

import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default createStore({
  state: {
    todos: [],
    id: null,
    title: "",
    content: "",
    complete: false,
    isEdit: false,
    editedMessage: "",
    deletedMessage: "",
    addedMessage: ""
  },
  mutations,
  actions,
  getters
})