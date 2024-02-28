import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  const [articles, setArticles] = useState([]);

  const url ='https://newsapi.org/v2/everything?q=tesla&from=2024-01-28&sortBy=publishedAt&apiKey=4e1f451020564c06af231cb0d4c81492'
  const newsFetch = async () => {
    try {
      let data = await fetch(url);
      let res = await data.json();
      setArticles(res.articles);
      console.log(articles);
    } catch (error) {
      console.log("unable to fetch data");
    }
  }

  useEffect(() => {
    newsFetch();
  }, []);
  return (
    <div className="grandparent">
      <Navbar />
      <br></br>
      <Routes>
        <Route exact path="/about" element={<About></About>} />
        <Route exact path="/" element={<News articles={articles}></News>}></Route>
        {/* <Route exact path="/us_news" element={<News key="" country={"us"} category={"general"}></News>}></Route> */}
        {/* <Route exact path="/business" element={<></>}></Route>
        <Route exact path="/entertainment" element={<></>}></Route>
        <Route exact path="/general" element={<></>}></Route>
        <Route exact path="/health" element={<></>}></Route>
        <Route exact path="/science" element={<></>}></Route>
        <Route exact path="/sports" element={<News key="sports"></News>}></Route>
        <Route exact path="/technology" element={<></>}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
