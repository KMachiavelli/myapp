import React, { useRef, useState } from 'react'
import { useFetch } from '../customHooks/useFetch';
import { myURLs } from '../assets/urls/urls';

const statusOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    parameters: {
        query: '/status',
    },
  }

const Books = () => {
    const [loadNextStatus, setLoadNextStatus] = useState(false);
    const {obj: statusAPI, loading: statusLoading} = useFetch(
        myURLs.books,
        loadNextStatus,
        statusOptions,
        statusOptions.parameters,
        true,
        false
        );
    const refStatus = useRef(null);
    const handleSubmit = (
        refStatus: React.MutableRefObject<null>,
        e: React.FormEvent<HTMLFormElement>
        ) => {
        e.preventDefault();
        console.log(myURLs.books+statusOptions.parameters.query);
        if(refStatus) {
            setLoadNextStatus(!loadNextStatus);
            console.log(statusAPI);
        }
    }
    return (
        <div>
            <form onSubmit={(e) => {handleSubmit(refStatus, e)}}>
                <input ref={refStatus} type="text" placeholder="STATUS"></input>
                <input ref={null} type="text"></input>
                <input ref={null} type="text"></input>
                <input ref={null} type="text"></input>
                <button type="submit" />
            </form>    
        </div>
    )
}

export default Books
