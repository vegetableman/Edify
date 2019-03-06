import { api, createStore } from "../services";

const loadAuth = () => {
  try {
    return JSON.parse(localStorage.getItem("__Edify__Auth"));
  } catch (ex) {
    return null;
  }
};

const defaultState = loadAuth() || {
  isAuthenticated: false,
  email: null,
  password: null,
  err: null
};

const authStore = createStore(
  {
    ...defaultState
  },
  {
    authenticate: (email, password) => async state => {
      // const [err] = await props.api.authenticate(username, password);
      const authInfo = loadAuth() || state;
      const match = email === authInfo.email && password === authInfo.password;
      return { ...state, isAuthenticated: match };
    },
    signout: () => state => {
      return { ...state, isAuthenticated: false };
    },
    register: (email, password) => state => {
      return { ...state, ...{ isAuthenticated: true, email, password } };
    }
  },
  {
    api
  },
  {
    getIsAuthenticated: () => state => state.isAuthenticated
  }
);

authStore.subscribe(state => {
  localStorage.setItem("__Edify__Auth", JSON.stringify(state));
});

export default authStore;
