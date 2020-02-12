const itemsState = {
  items: [],
  hotdeals: [],
  productTimings: [],
  basket: [],
};

const itemReducer = (state, action) => {
  switch (action.type) {
  case 'updateItems':
    return { ...state, items: action.data };
  case 'updateHotdeals':
    return { ...state, hotdeals: action.data };
  case 'updateProductTimings':
    return { ...state, productTimings: action.data };
  case 'updateBasket':
    return { ...state, basket: action.data };
  default:
    return { ...state };
  }
};

export {
  itemReducer as default,
  itemsState,
};
