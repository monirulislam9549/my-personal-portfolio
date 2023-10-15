import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import bs from "../../assets/bs.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import firebase from "../../assets/firebase.png";
import vscode from "../../assets/vscode.png";
import netlify from "../../assets/netlify.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-center text-3xl font-bold mt-10">My Skills</h1>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <div>
          <p className="text-justify text-2xl">
            I possess a strong and versatile foundation in the MERN Stack and
            various front-end technologies and frameworks. My ability to quickly
            grasp new concepts and adapt to diverse situations sets me apart. As
            a perpetual learner, I maintain a commitment to staying updated with
            emerging technologies and incorporating them into my projects.
            Beyond my technical capabilities, I am a dedicated team player with
            exceptional communication skills. I am enthusiastic about
            contributing my collaborative expertise to your esteemed team. I
            thrive in group settings, actively seeking feedback to enhance the
            quality of my work.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3 justify-center items-center">
          <img className="h-24 w-20" src={html} alt="" />
          <img className="h-24 w-20" src={css} alt="" />
          <img className="h-24 w-20" src={js} alt="" />
          <img className="h-28 w-28" src={bs} alt="" />
          <img className="h-24 w-20" src={tailwind} alt="" />
          <img className="h-28 w-28" src={react} alt="" />
          <img className="h-32 w-40" src={next} alt="" />
          <img className="h-24 w-20" src={node} alt="" />
          <img className="h-24 w-20" src={express} alt="" />
          <img className="h-24 w-36" src={mongodb} alt="" />
          <img className="h-24 w-20" src={firebase} alt="" />
          <img className="h-24 w-20" src={vscode} alt="" />
          <img className="h-24 w-20" src={netlify} alt="" />
          <img className="h-24 w-20" src={figma} alt="" />
          <img className="h-24 w-20" src={git} alt="" />
          <img className="h-24 w-20" src={html} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
