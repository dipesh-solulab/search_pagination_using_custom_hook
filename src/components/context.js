import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

// steps 1 : create context
const Appcontext = createContext();
const api = "http://hn.algolia.com/api/v1/search?";
const initialState = {
  isloading: true,
  page: 0,
  nbPages: 0,
  query: "",
  hits: [],
};

// steps 2 : provider (for passing data) its a provider function
const AppProvider = ({ children }) => {
  // const [state,SetState]=useState(initial); here will use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async (url) => {
    dispatch({
      type: "LOADING",
    });
    try {
      const res = await axios.get(url);
      console.log(res);
      //   console.log(res.data.hits);
      dispatch({
        type: "GETDATA",
        payload: {
          hits: res.data.hits,
          nbPages: res.data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   remove data
  const removeData = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  //   search the data
  const SearchData = (serachQuery) => {
    dispatch({
      type: "SEARCH_DATA",
      payload: serachQuery,
    });
  };

  //Paginations  (previous page and Next page)
  const previousPageGET = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  const nextPageGET = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  useEffect(() => {
    getData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <Appcontext.Provider
      value={{ ...state, removeData, SearchData, nextPageGET, previousPageGET }}
    >
      {children}
    </Appcontext.Provider>
  );
};

// Creating Custom hooks so we dont need every where to import 2 thing Appcontext and useContext now just import one thing useGlobalContext
const useGlobalContext = () => {
  return useContext(Appcontext);
};
export { AppProvider, Appcontext, useGlobalContext };
