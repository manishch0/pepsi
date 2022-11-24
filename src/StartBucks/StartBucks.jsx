import React from "react";
import "./starBucks.css";
import StartBucksLogo from "../StarkbucksAssests/logo.png";
import StarkbucksBottle from "../StarkbucksAssests/img1.png";
import StarBucksGreen from "../StarkbucksAssests/thumb1.png";
import StarBucksc from "../StarkbucksAssests/thumb2.png";
import StarBuckspink from "../StarkbucksAssests/thumb3.png";

function StartBucks() {
  return (
    <header>
      <div className="circle"></div>
      <nav>
        <a href="Logo">
          <img className="logo" src={StartBucksLogo} alt="" />
        </a>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="menu">menu</a>
          </li>
          <li>
            <a href="new">what's New</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="textBox">
          <h2>it's not just coffee</h2>
          <h2>
            it's
            <span> starkbucks</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            voluptatibus maxime omnis. Dolorem laudantium ipsam vero. Ipsam
            dolore aspernatur, similique autem tempora rerum, unde neque
            consequatur voluptate blanditiis ipsum quasi!
          </p>
          <a href="more">learn more</a>
        </div>
        <div className="imgBox">
          <img className="bottle" src={StarkbucksBottle} alt="" />
        </div>
      </div>
      <ul className="thumb">
        <li>
          <a href="bottle">
            <img src={StarBucksGreen} alt="" />
          </a>
        </li>
        <li>
          <a href="bottle">
            <img src={StarBucksc} alt="" />
          </a>
        </li>
        <li>
          <a href="bottle">
            <img src={StarBuckspink} alt="" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default StartBucks;
