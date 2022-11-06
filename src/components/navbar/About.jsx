import React from "react";
import videobg from "../../video/14675c75-a6cee76e.mp4";
import { NavLink } from "react-router-dom";
import videogb2 from "../../video/1662986514-m-final (1).webm";

const About = () => {
  return (
    <div className="video-container">
      <div className="video-box">
        <video src={videobg} autoPlay loop muted></video>
      </div>

      <div className="video-content">
        <div className="video-box2">
          <div className="video-box-2-element-1">
            <h1>
              <span className="video-h2">W</span>ONDERLAND
            </h1>
          </div>
          <div className="video-box-2-element-2">
            <p className="video-box-2-item-1">BRAND EXPERIENCE DESIGN</p>
            <p className="video-box-2-item-2">INC 16-22 | BASED IN AMS</p>
          </div>

          <div className="video-box3">
            <div className="video-li1">
              <NavLink className="video-link" to="/">
                <span className="video-span-item-1">1</span>
                <span className="video-span1-item-1">HOME</span>
              </NavLink>
            </div>
            <div className="video-li2">
              <NavLink to="/work" className="video-link">
                {" "}
                <span className="video-span">2</span>
                <span className="video-span1">INDEX</span>
              </NavLink>
            </div>
            <div className="video-li3">
              <NavLink to="/about" className="video-link">
                <span className="video-span">3</span>
                <span className="video-span1">ABOUT</span>
              </NavLink>
            </div>
            <div className="video-li4">
              <NavLink to="/contect" className="video-link">
                <span className="video-span">4</span>
                <span className="video-span1">CONTACT</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content-container">
        <div className="about-container-box-1">
          <p className="had1">WE COLLABORATE WITH</p>
          <p className="had2">AMBITIOUS BRANDS AND PEOPLE.</p>
          <p className="had3">ARE YOU WITH US?</p>
        </div>
        <div className="about-container-box-2">
          <div className="c-box-2-video">
            <video src={videogb2} autoPlay loop muted></video>
          </div>
          <div className="about-container-box-3">
            <div className="about-box-1">
              <p className="had4">WORK WITH US</p>
              <p className="para1">bhashka2600@gmail.com</p>
              <p className="had5">BECOME A WONDERLANDER</p>
              <p className="para1">bhashka2600@gmail.com</p>
              <p className="had6">CONTACT</p>
              <p className="para2">bhashka2600@gmail.com</p>
              <p className="para2">9639567903</p>
              <p className="para1">Dehradun</p>
            </div>
            <div className="about-box-2">
              <p className="had7">GENERAL QUESTIONS</p>
              <p className="para1">bhashka2600@gmail.com</p>
              <p className="had8">OUR NEWSLETTER</p>
              <input type="text" placeholder="e-mail-address" />
              <p className="had9">SOCIALS</p>
              <p className="para3">Instagram</p>
              <p className="para3">Dribbble</p>
              <p className="para3">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
