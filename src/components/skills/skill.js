import React from 'react'
import './skill.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import js from '../assets/js.png'
import firebase from '../assets/firebase.png'
import tailwind from '../assets/tailwind..png'
import react from '../assets/react.png'
import next from '../assets/next.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import git from '../assets/git.png'

function Skill() {
  return (
    <div className='skill-parent'>
      <div className='skill-wrap'>

        <h1 data-aos="fade-down">SKILLS</h1>
        <hr  data-aos="fade-down" />
      </div>
      <div className='skill-img' >

        <div className='skill-flex' data-aos="zoom-out">
          <img src={html} alt='' />
          <p>HTML5</p>
        </div>
        <div className='skill-flex' data-aos="zoom-out">
          <img src={css} alt='' />
          <p>CSS3</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">
          <img src={js} alt='' />
          <p>JavaScript</p>
        </div>
        <div className='skill-flex' data-aos="zoom-out">
          <img src={bootstrap} alt='' />
          <p>BootStrap</p>
        </div>
        <div className='skill-flex' data-aos="zoom-out">
          <img src={tailwind} alt='' />
          <p>Tailwind CSS</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">

          <img src={firebase} alt='' />
          <p>FireBase</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">

          <img src={react} alt='' />
          <p>React.JS</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">
          <img src={next} alt='' />
          <p>Next.JS</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">

          <img src={node} alt='' />
          <p>Node.js</p>
        </div>
        <div className='skill-flex' data-aos="zoom-out">

          <img src={express} alt='' />
          <p>Express.JS</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">

          <img src={mongo} alt='' />
          <p>MongoDB</p>
        </div>
        <div className='skill-flex'  data-aos="zoom-out">

          <img src={git} alt='' />
          <p>Github</p>
        </div>




      </div>
    </div>
  )
}

export default Skill
