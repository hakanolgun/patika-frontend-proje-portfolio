import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header-container">
          <nav className="header-nav">
            <ul className="header-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/" component={Home} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
