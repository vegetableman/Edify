import { createStore } from "../services";
import _ from "lodash";
const loadItems = () => {
  try {
    return JSON.parse(localStorage.getItem("__Edify__Cart"));
  } catch (ex) {
    return [];
  }
};

const cartStore = createStore(
  {
    itemIds: loadItems() || []
  },
  {
    addItem: id => state => ({ itemIds: [...state.itemIds, id] }),
    removeItem: id => state => ({
      itemIds: _.without(state.itemIds, id)
    }),
    removeOneItem: id => state => {
      const { itemIds } = state;
      const index = _.indexOf(itemIds, id);
      if (index > -1) {
        delete itemIds[index];
      }
      return { itemIds: _.compact(itemIds) };
    }
  },
  null,
  {
    hasItem: id => state => {
      return state.itemIds.find(itemId => itemId === id);
    },
    getItemCount: id => state => {
      return _.size(_.filter(state.itemIds, itemId => itemId === id));
    },
    getCount: () => state => {
      return _.size(state.itemIds);
    }
  }
);

cartStore.subscribe(state => {
  localStorage.setItem("__Edify__Cart", JSON.stringify(state.itemIds));
});

export default cartStore;
