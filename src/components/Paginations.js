import React from "react";
import { useGlobalContext } from "./context";

const Paginations = () => {
  const { page, nbPages, nextPageGET, previousPageGET } = useGlobalContext();
  return (
    <>
      <div className="max_widht_small">
        <div className="d-flex justify-content-center align-items-center my-3">
          <button
            className="PaginationBtn btn btn-success"
            onClick={() => previousPageGET()}
          >
            Previous
          </button>
          <h6 className="m-0 mx-2">
            {page + 1} to {nbPages}
          </h6>
          <button
            className="PaginationBtn btn btn-success"
            onClick={() => nextPageGET()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Paginations;
