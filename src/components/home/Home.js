import React from "react";
import hakan from "../../assets/hakan.png";
import epic from "../../assets/epic.jpeg";
import Footer from "../footer/Footer";
function Home() {
  return (
    <div className="homePage">
      <div className="bg">
        <img className="profile_photo" src={hakan} alt="profile photo" />
        <h1>
          Hi, I'm Hakan. I help people make the world better through quality
          software.
        </h1>
      </div>
      <div className="firstcard">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          in, fugit tenetur at modi eius aliquid necessitatibus aperiam cum id
          ab, dolores excepturi. Doloribus, porro sequi nostrum reprehenderit
          non necessitatibus eum animi quaerat!
        </p>
        <img src={epic} alt="" />
      </div>
      <div className="firstcard">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          in, fugit tenetur at modi eius aliquid necessitatibus aperiam cum id
          ab, dolores excepturi. Doloribus, porro sequi nostrum reprehenderit
          non necessitatibus eum animi quaerat!
        </p>
        <img src={epic} alt="" />
      </div>
      <div className="firstcard">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          in, fugit tenetur at modi eius aliquid necessitatibus aperiam cum id
          ab, dolores excepturi. Doloribus, porro sequi nostrum reprehenderit
          non necessitatibus eum animi quaerat!
        </p>
        <img src={epic} alt="" />
      </div>
      <div className="firstcard">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          in, fugit tenetur at modi eius aliquid necessitatibus aperiam cum id
          ab, dolores excepturi. Doloribus, porro sequi nostrum reprehenderit
          non necessitatibus eum animi quaerat!
        </p>
        <img src={epic} alt="" />
      </div>
    </div>
  );
}

export default Home;
