/* eslint no-underscore-dangle: 0 */
const readStorage = () => {
  let users = [];
  try {
    users = JSON.parse(localStorage.getItem('users'));
  } catch {
    //
  }
  return users;
};

const loginCall = ({ login, password }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const users = readStorage() || [];
    const user = users.filter((u) => u.login === login)[0];
    if (user && (user.password || '').toString() === (password || '').toString()) {
      resolve({
        id: user.id,
        login: user.login,
        role: user.role,
      });
    } else {
      reject(new Error('bad credentials'));
    }
  }, 200);
});

const userLoginGet = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const users = readStorage() || [];
    const user = users.filter((u) => u.id === id)[0];
    if (user) {
      resolve(user.login);
    } else {
      reject(new Error(`User with ${id} not found`));
    }
  }, 100);
});

export default ({
  namespaced: true,
  state: {
    me: {},
  },
  mutations: {
    SET_ME(state, me) {
      state.me = me;
    },
  },
  actions: {
    async login({ commit }, { login, password }) {
      await loginCall({ login, password })
        .then((res) => {
          commit('SET_ME', res);
          localStorage.setItem('user', JSON.stringify(res));
        });
    },
    getUserLogin(context, id) {
      return userLoginGet(id);
    },
    logout({ commit }) {
      commit('SET_ME', {});
      localStorage.removeItem('user');
    },
  },
});
