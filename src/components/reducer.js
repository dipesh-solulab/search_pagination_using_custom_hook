const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "GETDATA":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE":
      return {
        ...state,
        hits: state.hits.filter(
          (currentElement) => currentElement.objectID !== action.payload
        ),
      };
    case "SEARCH_DATA":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_PAGE":
      if (state.page <= 1) {
        state.page = 1;
      }
      return {
        ...state,
        page: state.page - 1,
      };
    case "NEXT_PAGE":
      if (state.page >= state.nbPages) {
        state.page = 1;
      }
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
export default reducer;
