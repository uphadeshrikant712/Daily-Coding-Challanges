import React, { useEffect, useRef, useState } from 'react'
import './search.css';

const Search = () => {
  const state = {
    loading: 'loading',
    error: 'error',
    success: 'success'
  };

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(state.loading);

  const cache = useRef({});

  useEffect(() => {


    const fetchData = async () => {
      try {
        setStatus(state.loading);

        if (cache.current[query])
        {
          console.log("Retrived from cache");
          setResult(cache.current[query]);
          setStatus(state.success);
          return;
        }
        console.log("Data from API");
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`);
        const data = await res.json();
        setStatus(state.success)

        cache.current[query] = data.products;
        setResult(data.products)

      } catch (error) {
        console.log(error)
        setStatus(state.error);
      }
    }
    const timerId = setTimeout(fetchData, 1000);

    return () =>
    {
      clearTimeout(timerId)
    }

    // fetchData();
  }, [query]);
  return (
    <div className='search-main'>
      <input value={query} onChange={(e) => setQuery(e.target.value)} className='search-box' type="text" placeholder='Search' />

      { status === state.error && <div>Error Occured</div>}
      { status === state.loading && <div>...Loading</div>}
      {
        status === state.success &&
        <ul className='ul'>
          {
            result.map((product) => {
              return (
                <li key={product.id}>{product.title}</li>
              )
            })
          }

        </ul>
      }
    </div>
  )
}

export default Search