import React from "react";
import videogb1 from "../../video/9edd8dcb-4f05895a.mp4";
import { NavLink } from "react-router-dom";

const Contect = () => {
  return (
    <div className="content-container">
      <div className="c-video-box">
        <video src={videogb1} autoPlay loop muted></video>
      </div>
      <div className="c-video-content">
        <div className="c-video-box2">
          <div className="c-video-box-2-element-1">
            <h1>
              <span className="c-video-h2">W</span>ONDERLAND
            </h1>
          </div>
          <div className="c-video-box-2-element-2">
            <p className="c-video-box-2-item-1">BRAND EXPERIENCE DESIGN</p>
            <p className="c-video-box-2-item-2">INC 16-22 | BASED IN AMS</p>
          </div>

          <div className="c-video-box3">
            <div className="c-video-li1">
              <NavLink className="c-video-link" to="/">
                <span className="c-video-span-item-1">1</span>
                <span className="c-video-span1-item-1">HOME</span>
              </NavLink>
            </div>
            <div className="c-video-li2">
              <NavLink to="/work" className="c-video-link">
                {" "}
                <span className="c-video-span">2</span>
                <span className="c-video-span1">INDEX</span>
              </NavLink>
            </div>
            <div className="c-video-li3">
              <NavLink to="/about" className="c-video-link">
                <span className="c-video-span">3</span>
                <span className="c-video-span1">ABOUT</span>
              </NavLink>
            </div>
            <div className="c-video-li4">
              <NavLink to="/contect" className="c-video-link">
                <span className="c-video-span">4</span>
                <span className="c-video-span1">CONTACT</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="c-main">
        <div className="c-content-container">
          <div className="content-container-box-1"></div>
          <div className="content-container-box-2">
            <div className="inner-container-box-1">
              <div className="inner-box-1">
                <p className="headpara">
                  Fiercely independent, culturally rooted and globally active.
                  Let’s connect Meta.
                </p>
              </div>
              <div className="inner-box-11">
                <p className="had4">WORK WITH US</p>

                <p className="para1">bhashka2600@gmail.com</p>
                <p className="had5">BECOME A WONDERLANDER</p>
                <p className="para1">bhashka2600@gmail.com</p>
                <p className="had6">CONTACT</p>
                <p className="para2">bhashka2600@gmail.com</p>
                <p className="para2">9639567903</p>
                <p className="para1">Dehradun</p>
              </div>
            </div>
            <div className="inner-box-2">
              <div className="inner-container-box-1"></div>
              <div className="inner-container-box-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
