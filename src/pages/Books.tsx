import React, { useRef, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import { myURLs } from "../assets/urls/urls";
import { TestInputSection } from "./BooksStyles";
import Input from "../components/Input/Input";
import Formulae from "../components/Formulae/Formulae";

const statusOptions = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY_POSTMAN,
  },
  parameters: {
    query: "/status",
  },
};

const checkKeyOptions = {
  method: "GET",
  mode: "cors",
  headers: {
    "content-type": "application/json",
    accept: "*/*",
  },
  parameters: {
    query: "/person",
  },
};

const Books = () => {
  const handleSubmit = (
    refStatus: React.MutableRefObject<null>,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };
  return (
    <Formulae
      placeholderBottom="Password"
      placeholderUpper="Name"
      widthCustom={125}
    />
  );
};

export default Books;
