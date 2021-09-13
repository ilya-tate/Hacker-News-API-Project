import { useState, useEffect } from 'react';
const API_ENDPOINT = 'http://hn.algolia.com/api/v1/search?';

// searchQuery example: &s=batman
export const useFetch = searchQuery => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  // url is always API_ENDPOINT and searchQuery
  const fetchStory = async url => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setStories.push(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log(`${API_ENDPOINT}query=${searchQuery}`);
    fetchStory(`${API_ENDPOINT}query=${searchQuery}`);
  }, [searchQuery]);

  return ({ loading, stories });
}
