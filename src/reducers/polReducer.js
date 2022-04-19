
export const polReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((pol) => pol.id !== action.payload);

    default:
      return state;
  }
};
