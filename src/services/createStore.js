/**
 * An alternative to redux/mobx in 48 lines of code
 * Features:
 * Allows subscription and unsubscription to state changes.
 * Allows selectors to query state.
 */

import _ from "lodash";

let uid = 1;
const createStore = (state, actions, props = {}, selectors, id = uid++) => {
  const store = {
    id,
    initialState: { ...state },
    state,
    props,
    subscriptions: new Set(),
    destroy: () => {
      store.subscriptions.clear();
    },
    subscribe: callback => {
      store.subscriptions.add(callback);
      return () => store.subscriptions.delete(callback);
    },
    getState: () => store.state,
    ..._.reduce(
      actions,
      (acc, __, name) => ({
        ...acc,
        ...{
          [name]: async (...args) => {
            let result = await actions[name](...args);
            if (_.isFunction(result)) {
              result = await actions[name](...args)(store.state, store.props);
            }
            store.state = { ...store.state, ...result };
            store.subscriptions.forEach(callback => callback(store.state));
            return result;
          }
        }
      }),
      {}
    ),
    ..._.reduce(
      selectors,
      (acc, __, name) => ({
        ...acc,
        ...{
          [name]: (...args) => selectors[name](...args)(store.state)
        }
      }),
      {}
    )
  };
  return store;
};

export default createStore;
