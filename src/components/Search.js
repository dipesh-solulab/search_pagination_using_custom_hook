import React from "react";
import Form from "react-bootstrap/Form";
import { useGlobalContext } from "./context";
const Search = () => {
  const { query, SearchData } = useGlobalContext();
  return (
    <>
      <div className="max_widht_small">
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search.."
              onChange={(e) => SearchData(e.target.value)}
              value={query}
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Search;
