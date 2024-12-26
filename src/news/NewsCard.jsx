import React from "react";
import { motion } from "motion/react";
// scroll anmation using Framer motion

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const NewsCard = ({ news }) => {
  // Ensure `news.urlToImage` is present
  if (!news.urlToImage) return;

  // Convert ISO date to a readable format
  const date = new Date(news.publishedAt);
  const newDate = date.toLocaleString();

  // Handle card click to open the news link in a new tab
  const handleCardClick = () => {
    const actualLink = news.url;
    window.open(actualLink, "_blank"); // Opens the URL in a new tab
  };

  return (
    <ScrollAnimation>
      <li className="card-content" onClick={handleCardClick}>
        <figure>
          {/* setting images */}
          <img
            src={news.urlToImage || "/defaultpic.png"}
            alt={news.title}
            className="news-img"
            onError={(e) => (e.target.src = "/defaultpic.png")} // Fallback for broken imag
          />
        </figure>
        {/* <div className="card-news"> */}
        {/* setting title */}
        <h3 className="title">{news.title}</h3>
        {/* setting news-source and news Date*/}
        <h6 className="news-source news-date">
          {news.source.name} - {newDate}
        </h6>
        {/* setting news Descriptionss */}
        <p className="news-desc">{news.description}</p>
        {/* </div> */}
      </li>
    </ScrollAnimation>
  );
};

export default NewsCard; 
 