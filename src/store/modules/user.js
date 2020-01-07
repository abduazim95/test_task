import router from '@/router';
import { USER } from '@/store/mutation-types';

export default {
    state: {
        authenticated: false,
        role: null,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caseycavanagh/128.jpg'
    },

    mutations: {
        [USER.SET_USER](state, payload) {
            state.authenticated = true;
            state.role = payload.role;
            state.avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/caseycavanagh/128.jpg';
        },
        [USER.UNSET_USER](state) {
            state.authenticated = false;
            state.role = null;
            state.avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/caseycavanagh/128.jpg';
        }
    },

    getters: {
        user: state => state
    },
    
    actions: {
        login({ commit }, payload) {
            const role = new FormData(payload.target).get('role');
            commit(USER.SET_USER, { role });
            router.push('/messages');
        },
        logout({ commit }, payload) {
            commit(USER.UNSET_USER, payload);
        }
    }
}