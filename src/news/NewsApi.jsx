import React, { useEffect, useState } from "react";
import "./news.css";
import NewsCard from "./NewsCard";
import NewsupButton from "./NewsupButton";

const NewsApi = () => {
  const [news, setNews] = useState([]); //news state
  const [query, setQuery] = useState("india"); //state to make query of the Api functional
  const [load, setLoad] = useState(true); //state to store loading status
  const [error, setError] = useState(null); //state to store error values
  const [search, setSearch] = useState(""); // State to evaluate search input
  const [selectednav, setSelectednav] = useState("india"); //state to make nav list functional

  // Access the API key dynamically from .env


  const API_key = import.meta.env.VITE_API_KEY;


  // Function to fetch news data from the API
  const fetchApi = async () => {
    const API = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_key}`;
    try {
      const res = await fetch(API); // Fetching data from API
      const data = await res.json();
      console.log(data);

      const allData = data.articles;

      const fulfilAlldata = await Promise.all(allData); // Resolving articles data
      setNews(fulfilAlldata); // Setting news data in state
      setLoad(false); // Update loading status
    } catch (error) {
      console.log(error);
      setLoad(false);
      setError(error); // Setting error state
    }
  };

  // Fetch news whenever `query` changes
  useEffect(() => {
    fetchApi();
  }, [query]);

  // Function to handle category clicks
  const handleAnchorClick = (e) => {
    e.preventDefault()
    const newQuery = e.target.id; // Get the clicked category
    setQuery(newQuery); // Update query state
    setSelectednav(newQuery); // Update selected navigation state
  };

  // Function to handle Search button click
  const handleSearch = () => {
    // Trim the input and check if it's not empty
    if (search.trim() !== "") {
      const normalizedQuery = search.trim().toLowerCase(); // Convert to lowercase
      setQuery(normalizedQuery); // Update query state with normalized input
      setSelectednav("");
    }
  };

  // Conditional rendering for loading state
  if (load) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Loading........</h1>
      </>
    );
  }

  // Conditional rendering for error state
  if (error) {
    return <h1 style={{ textAlign: "center" }}>Error: {error.message}</h1>;
  }

  return (
    <>
      <header>
        <nav>
          <img src="/AtoZ_newslogo.png" alt="news" />
          <ul>
            {/* Navigation links for news categories */}
            <a
              href="#"
              onClick={handleAnchorClick}
              className={selectednav === "india" ? "selected" : ""}
            >
              <li id="india">Home</li>
            </a>
            <a
              href="#"
              onClick={handleAnchorClick}
              //
              className={selectednav === "technology" ? "selected" : ""}
            >
              <li id="technology">Technology</li>
            </a>
            <a
              href="#"
              onClick={handleAnchorClick}
              className={selectednav === "finance" ? "selected" : ""}
            >
              <li id="finance">Finance</li>
            </a>
            <a
              href="#"
              onClick={handleAnchorClick}
              className={selectednav === "sport" ? "selected" : ""}
            >
              <li id="sport">Sports</li>
            </a>
          </ul>

          {/* Search input and button */}
          <div className="search">
            <input
              type="search"
              placeholder="e.g., science"
              autoComplete="off"
              value={search} // Controlled input for search
              onChange={(e) => setSearch(e.target.value)} // Update search state on input
            />
            <button onClick={handleSearch}>Search</button>{" "}
            {/* Trigger search */}
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <ul className="card">
            {/* Render each news article using NewsCard component */}
            {news.map((newsArticle,index) => {
              return <NewsCard key={`${newsArticle.title}-${index}`} news={newsArticle} />;
            })}
          </ul>
        </div>
        <NewsupButton />
      </main>
    </>
  );
};

export default NewsApi;
  