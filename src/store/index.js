import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state){
            this.state.count++
        }
    },
    actions: {},
    modules: {
        app,
        user
    }
});

export default store;
