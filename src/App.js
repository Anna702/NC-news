import "./App.css";
import ArticleCard from "./components/ArticleCard";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SelectAuthor from "./components/SelectAuthor";
import SelectTopic from "./components/SelectTopic";
import { Route, Routes } from "react-router-dom";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Nav">
        <SelectAuthor />
        <SelectTopic />
      </div>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
