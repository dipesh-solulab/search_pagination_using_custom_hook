import React from "react";
import { useGlobalContext } from "./context";
// import "./mystyle.css";
const DisplayDatas = () => {
  const { hits, isloading,removeData } = useGlobalContext();

  if (isloading) {
    return (
      <>
        <div className="container">
          <h3 className="text-success text-center">Loading... Plz wait</h3>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="max_widht_small">
        <h1 className=" text-center">This is data of Api </h1>

        {hits.map((currentElement) => {
          const { objectID, title, url, author } = currentElement;
          return (
              <div className="div_wrapper my-3" key={objectID}>
                <h4 className="Main_title">{title}</h4>
                <h5>By : {author}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    More info
                  </a>
                  <button className="btn btn-info" onClick={()=>removeData(objectID)}>Delete</button>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayDatas;
