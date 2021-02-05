const checkAuth = ({ store }) => {
  // get usser from localStorage
  let storedUser = {};
  try {
    storedUser = JSON.parse(localStorage.getItem('user')) || {};
  } catch (error) {
    //
  }
  if ('id' in storedUser) {
    store.commit('user/SET_ME', storedUser);
  }
  return true;
};

const isAuthenticated = ({ store }) => {
  checkAuth({ store });
  const { me } = store.state.user;
  let result = false;
  if (me && 'id' in me) {
    result = true;
  }
  return result;
};

const isWriter = ({ store }) => {
  let result = false;
  if (!isAuthenticated({ store })) {
    result = false;
  } else {
    result = store.state.user.me.role === 'writer';
  }
  return result;
};

export default ({
  isAuthenticated,
  isWriter,
  checkAuth,
});
