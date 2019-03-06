import { createStore } from "../services";

const loadInfo = () => {
  try {
    return JSON.parse(localStorage.getItem("__Edify__User"));
  } catch (ex) {
    return null;
  }
};

const userStore = createStore(
  {
    info: loadInfo() || {}
  },
  {
    setUser: info => ({ info })
  }
);

userStore.subscribe(state => {
  localStorage.setItem("__Edify__User", JSON.stringify(state.info));
});

export default userStore;
