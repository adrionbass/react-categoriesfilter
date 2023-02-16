import { useState } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ButtonList from "./components/ButtonList";
import data from "./data/data";
import imgHome from "./assets/pexels-markus-spiske-2004161.jpg";

function App() {
  const allCategories = [
    "All",
    ...new Set(data.map((article) => article.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    if (category === "All") {
      setArticles(data);
      return;
    }
    const filteredData = data.filter(
      (article) => article.category === category
    );
    setArticles(filteredData);
  };
  return (
    <>
      <div className="title">
        <div className="main-title">
            <p className="dev-title">DEV</p>
            <p>~magazine</p>
        </div>
        <h1>BASIC CATEGORIES FILTER EXAMPLE</h1>
        <img
          src={imgHome}
        />
      </div>
      <ButtonList categories={categories} filterCategory={filterCategory} />
      <ArticleList articles={articles} />
    </>
  );
}

export default App;
