import React, { Component } from 'react';
import "./About.css";
import Professional_Headshot from "../assets/Professional_Headshot.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src = {Professional_Headshot}
                alt="Professional Headshot"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Darren Metoyer</div>
              <div className="brief_description">
                My name is Darren Metoyer, and I am a student at Xavier University of Louisiana, pursuing a major in computer science.
                 Apart from academics, I enjoy playing basketball with my friends in my free time. I also enjoy playing video games
                  and watching movies with my big brother!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}