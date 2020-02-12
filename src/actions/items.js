const itemsActions = {
  updateItems: (data) => ({ type: 'updateItems', data: data }),
  updateHotdeals: (data) => ({ type: 'updateHotdeals', data: data }),
  updateProductTimings: (data) => ({ type: 'updateProductTimings', data: data }),
  updateBasket: (data) => ({ type: 'updateBasket', data: data }),
};

export default itemsActions;
