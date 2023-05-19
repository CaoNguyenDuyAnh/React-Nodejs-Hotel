import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Story from "./pages/story/Story";
import Blog from "./pages/blog/Blog";
import DetailBlog from "./pages/detailBlog/DetailBlog";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detailblog" element={<DetailBlog />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
