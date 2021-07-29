import React from "react";
import blogimage from "../../assets/blogimage.jpeg";
import Post from "../post/Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Blog() {
function dNone(){
    const blogPage = document.getElementsByClassName("blogPage")[0];
    blogPage.classList.add("dNone");
}


    return (
    <div>
      <Router>
        <div className="blogPage">
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post/" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post/" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>
          <div className="blogcard">
            <h2>Lorem ipsum dolor</h2>
            <img src={blogimage} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique a voluptatem placeat repellat perferendis, sed suscipit
              optio modi magnam praesentium vel, doloribus laborum illo autem,
              nesciunt facere aperiam nemo quo.
            </p>
            <Link to="/post" onClick={dNone}>Read More</Link>
          </div>

        </div>
        <Switch>
          <Route path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default Blog;
