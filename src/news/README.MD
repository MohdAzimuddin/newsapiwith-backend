# News Web Application

This is a responsive news web application that fetches the latest news articles from the [NewsAPI](https://newsapi.org/). The app allows users to view articles in different categories, search for specific topics, and scroll through news cards that display relevant news content. It features smooth animations, an intuitive layout, and a scroll-up button for improved user experience.

## Features

- **News Categories**: The app displays news in different categories like Home, Technology, Finance, and Sports. Users can click on these categories to view articles related to them.
- **Search Functionality**: Users can search for news articles by entering keywords into the search bar.
- **Responsive Layout**: The app automatically adjusts to different screen sizes, making it mobile-friendly.
- **Smooth Animations**: News cards and various UI elements are animated using **Framer Motion**.
- **Scroll-Up Button**: A scroll-up button appears when the user scrolls down the page, allowing them to quickly return to the top.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **NewsAPI**: To fetch the latest news articles from the API.
- **Framer Motion**: For smooth scroll animations and transitions.
- **CSS (with Media Queries)**: For styling and responsive design.
- **JavaScript (ES6)**: For handling dynamic content fetching and interactions.

## Installation 

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/news-web-app.git
    cd news-web-app
    ```

2. **Install dependencies**:

    Make sure you have **Node.js** and **npm** installed. Then run:

    ```bash
    npm install
    ```

    3. **before starting**:
    create .env file for api key and get your personal api key prom NewsApi.com just by sign in. and .env file in the root of vite instead of project folder i have shared the eaxmple.env file in that i have added how you should add that api key.

4. **Start the development server**:

    Once the dependencies are installed, start the development server:

    ```bash
    npm start
    ```

    The application should now be running at `http://localhost:3000/`.



## How It Works

### News Fetching:
- The app uses the [NewsAPI](https://newsapi.org/) to fetch news articles based on a query. The default query is set to **"India"**, but users can search for specific topics such as **Technology**, **Finance**, or **Sports**.
- News articles are displayed in cards containing an image, title, source, date, and description.
- Clicking on a news card opens the full article in a new tab.

### Navigation:
- The navigation menu at the top allows users to select different news categories.
- The selected category is highlighted, and the corresponding articles are displayed.

### Scroll-Up Button:
- When the user scrolls down the page, a **scroll-up button** appears in the bottom-right corner.
- Clicking this button scrolls the page smoothly back to the top.

### Responsiveness:
- The app is responsive and adjusts its layout based on the screen size. The number of columns in the news card grid reduces on smaller screens, ensuring a clean and usable interface on mobile devices.

## Screenshots

### Desktop View
![Desktop View](./images/desktopScreen.png)

### Mobile View
![Mobile View](./imsges/desktopScreen.png)

## Environment Variables

You need to obtain a NewsAPI key to use the API. You can sign up for a free API key on [NewsAPI](https://newsapi.org/).

Once you have the API key, you can set it in the `.env` file in the root directory:


 ### Live Demo
News Web Application Live Demo (Replace with your deployed URL)
