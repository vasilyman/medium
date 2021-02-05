/* eslint no-underscore-dangle: 0 */
const readStorage = () => {
  let posts = [];
  try {
    posts = JSON.parse(localStorage.getItem('posts'));
  } catch {
    //
  }
  return posts;
};

const postsGet = (page) => new Promise((resolve) => {
  setTimeout(() => {
    const perPage = 10;
    const posts = readStorage().slice((page - 1) * perPage, page * perPage);
    const count = readStorage().length;
    resolve({ count, posts });
  }, 200);
});

const postGet = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const post = readStorage().filter((p) => p.id === id)[0];
    if (post) {
      resolve(post);
    } else {
      reject(new Error(`Post ${id} not found`));
    }
  }, 200);
});

const postCreate = (post) => new Promise((resolve) => {
  setTimeout(() => {
    const newPost = post;
    const posts = readStorage();
    const id = Math.max(...posts.map((p) => p.id)) + 1;
    newPost.id = id;
    const newPosts = [...posts, newPost];
    localStorage.setItem('posts', JSON.stringify(newPosts));
    resolve();
  }, 200);
});

const postDel = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const posts = readStorage();
    const post = posts.filter((p) => p.id === id)[0];
    if (post) {
      const newPosts = posts.filter((p) => p.id !== id);
      localStorage.setItem('posts', JSON.stringify(newPosts));
      resolve();
    } else {
      reject(new Error(`Post ${id} not found`));
    }
  }, 200);
});

const postEdit = (newPost) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const posts = readStorage();
    const post = posts.filter((p) => p.id === newPost.id)[0];
    if (post) {
      Object.assign(post, newPost);
      localStorage.setItem('posts', JSON.stringify(posts));
      resolve();
    } else {
      reject(new Error(`Post ${newPost.id} not found`));
    }
  }, 50);
});

const postClap = (id) => new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   const posts = readStorage();
  //   const post = posts.filter((p) => p.id === id)[0];
  //   if (post) {
  //     post.claps += 1;
  //     localStorage.setItem('posts', JSON.stringify(posts));
  //     resolve();
  //   } else {
  //     reject(new Error('Post not found'));
  //   }
  // }, 50);
  const posts = readStorage();
  const post = posts.filter((p) => p.id === id)[0] || {};
  post.claps += 1;
  postEdit(post)
    .then(() => resolve())
    .catch((e) => reject(e));
});

export default ({
  namespaced: true,
  state: {
    count: 0,
    posts: [],
    post: {},
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data;
    },
    SET_POST(state, data) {
      state.post = data;
    },
    SET_COUNT(state, data) {
      state.count = data;
    },
  },
  actions: {
    async getPosts({ commit }, page) {
      const p = page || 1;
      await postsGet(p)
        .then((res) => {
          commit('SET_COUNT', res.count);
          commit('SET_POSTS', res.posts);
        });
    },
    async getPost({ commit }, id) {
      await postGet(id)
        .then((res) => {
          commit('SET_POST', res);
        });
    },
    async createPost({ rootState }, { title, description }) {
      const createdAt = this._vm.$moment().format();
      const userId = rootState.user.me.id;
      const post = {
        title,
        description,
        claps: 0,
        createdAt,
        updateAt: createdAt,
        userId,
      };
      await postCreate(post);
    },
    async updatePost(context, { id, title, description }) {
      const updateAt = this._vm.$moment().format();
      const post = {
        id,
        title,
        description,
        updateAt,
      };
      await postEdit(post);
    },
    async deletePost(context, id) {
      await postDel(id);
    },
    async clapPost(context, id) {
      await postClap(id);
    },
  },
});
