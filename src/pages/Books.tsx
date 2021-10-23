import React, { useRef, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import { myURLs } from "../assets/urls/urls";
import { TestInputSection } from "./BooksStyles";
import Input from "../components/Input/Input";

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
  cache: "no-cache",
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY_POSTMAN,
  },
  parameters: {
    query: "/hello",
  },
};

const Books = () => {
  const [loadNextStatus, setLoadNextStatus] = useState(false);
  const { obj: statusAPI, loading: statusLoading } = useFetch(
    myURLs.books,
    loadNextStatus,
    statusOptions,
    statusOptions.parameters,
    true,
    false
  );
  const refStatus = useRef(null);

  const [loadNextCheckKey, setLoadNextCheckKey] = useState(false);
  const { obj: checkKeyAPI, loading: checkKeyLoaded } = useFetch(
    myURLs.books,
    loadNextCheckKey,
    checkKeyOptions,
    checkKeyOptions.parameters,
    true,
    false
  );
  const refCheckKey = useRef(null);

  const handleSubmit = (
    refStatus: React.MutableRefObject<null>,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(myURLs.books + statusOptions.parameters.query);
    if (refStatus.current) {
      setLoadNextStatus(!loadNextStatus);
      console.log("STATUS");
      console.log(statusAPI);
    }
    if (refCheckKey.current) {
      setLoadNextCheckKey(!loadNextCheckKey);
      console.log("checkKeyAPI");
      console.log(checkKeyAPI);
    }
  };
  return (
    <div>
      <TestInputSection>
        <form
          onSubmit={(e) => {
            handleSubmit(refStatus, e);
          }}
        >
          <input ref={refStatus} type="text" placeholder="STATUS"></input>
          <input ref={refCheckKey} type="text" placeholder="CHECK KEY"></input>
          <input ref={null} type="text"></input>
          <input ref={null} type="text"></input>
          <button type="submit" />
        </form>
      </TestInputSection>
      <TestInputSection>
        <Input
          widthCustom={200}
          placeholder="Hello"
          bottomBorder={true}
          isDark={true}
        />
      </TestInputSection>
      <TestInputSection />
    </div>
  );
};

export default Books;
