import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
  },
  getters: {
    authUser(state) {
      return state.users[state.authId];
    },
  },
  actions: {
    createPost(context, post) {
      const postId = `great-post-${Math.random()}`;
      post['.key'] = postId;
      context.commit('setPost', { postId, post });
      context.commit('appendPostToThread', { threadId: post.threadId, postId });
      context.commit('appendPostToUser', { userId: post.userId, postId });
    },
  },
  mutations: {
    setPost(state, { postId, post }) {
      Vue.set(state.posts, postId, post);
    },
    appendPostToThread(state, { threadId, postId }) {
      const thread = state.threads[threadId];
      Vue.set(thread.posts, postId, postId);
    },
    appendPostToUser(state, { userId, postId }) {
      const user = state.users[userId];
      Vue.set(user.posts, postId, postId);
    },
  },
});