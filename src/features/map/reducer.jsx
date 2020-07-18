const initialState = {
  tiles: [],
};

const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TILES":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default MapReducer;
