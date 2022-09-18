import data from "../data.json";
const initialState = {
  ...data
};
export const salesData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
