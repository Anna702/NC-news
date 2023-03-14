import "./App.css";
import ArticleCard from "./components/ArticleCard";
import Articles from "./components/Articles";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostAComment from "./components/PostAComment";
import SelectAuthor from "./components/SelectAuthor";
import SelectTopic from "./components/SelectTopic";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      </Routes>
      {/* <Users />
      
      <Comments />
      <PostAComment /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
