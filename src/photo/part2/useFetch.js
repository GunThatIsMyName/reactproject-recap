import { useEffect, useState } from "react";

const baseUrl = "https://api.unsplash.com/";
const clientId = `?client_id=${process.env.REACT_APP_PHOTO_KEY}`;

export const useImageFetch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const fetchList = async () => {
    setLoading(true);
    let api;
    if (query) {
      const search = `search/photos/`;
      api = `${baseUrl}${search}${clientId}&query=${query}&page=${page}`;
    } else {
      const photos = `photos`;
      api = `${baseUrl}${photos}${clientId}&page=${page}`;
    }
    try {
      const response = await fetch(api);
      const data = await response.json();
      setList((old) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...old, ...data.results];
        } else {
          return [...old, ...data];
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, [page, query]);
  return { setQuery, loading, list, setPage };
};
