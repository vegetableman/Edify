import { api, createStore } from "../services";
const authStore = createStore(
  {
    isAuthenticated: localStorage.getItem("__Edify__isAuthenticated"),
    err: null
  },
  {
    authenticate: (username, password) => async (__, props) => {
      const [err] = await props.api.authenticate(username, password);
      console.log("err: ", err);
      return { isAuthenticated: err ? false : true, err };
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
  localStorage.setItem("__Edify__isAuthenticated", state.isAuthenticated);
});

export default authStore;
