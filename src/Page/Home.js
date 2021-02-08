import React from "react"
import "./Home.css"
import img from "../data/images/profile.jpg"
import instagram from "../data/images/instagram.png"
import github from "../data/images/github.png"
import linkedin from "../data/images/linkedin.png"

import { projects } from "../data/images/projects"

export default function Home() {
  // const [Open, setOpen] = useState(false)

  return (
    <div className="home">
      <nav className="nav container">
        <div className="nav__content container">
          <div className="nav__content--logo">
            <h1>
              {" "}
              rb<span>.</span>
            </h1>
          </div>
          <div className="nav__content--menu">
            <span className="click">
              Click here <i className="fas fa-hand-point-right"></i>
            </span>
            {/* {Open ? (
              <span className="close" onClick={() => setOpen(!Open)}>
                <i className="fas fa-times"></i>
              </span>
            ) : ( */}
            <a href="#about">
              <p>About me</p>
            </a>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="header__content container">
          <div className="header__content--title">
            <h1>Hello </h1>{" "}
            <p>
              {"  "}
              and welcome to <span>you</span>.
            </p>
          </div>
          <div className="header__content--text">
            <p>
              Allow me to thank you for visiting my website and for showing
              interest to my work. <br />
            </p>
          </div>
        </div>
      </header>

      <div className="projects">
        <div className="projects__content container">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="project__content">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <div
                    className="project__content--image "
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                </a>
                <div className="project__content--info">
                  <div className="name">
                    <span>Project Name : </span>
                    {project.name}
                  </div>
                  <div className="tech">
                    <span>Tech used : </span>
                    {project.tech}
                  </div>
                  <div className="link">
                    {" "}
                    <span>
                      Links :
                      <span>
                        <a href={project.live} target="_blank" rel="noreferrer">
                          {" "}
                          Live
                        </a>
                      </span>
                      <span>
                        {" "}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about" id="about">
        {/* <div className={Open ? " add about__content container" : "remove about__content container"}> */}
        <div className="about__content container">
          <div className="about__personal">
            <div className="about__personal--image">
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="about__personal--info">
              <div className="name">
                <p>
                  Hello ,I'm{" "}
                  <span>
                    {" "}
                    Rahan <span>Bouess</span>
                  </span>
                </p>
                <button className="resume">
                  <a
                    href="https://drive.google.com/file/d/1vlWMt_qO8OG_nV2Q6SlwEBcWx1XGBjFB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get My Resume
                  </a>
                </button>
              </div>
              <div className="myself">
                <div className="title">
                  <p>A bit about me :</p>
                </div>

                <p>
                  I'm a frontend web developer with a passion for web design and
                  problem solving, I spend most of my time learning so that I
                  could be able to bring solutions to people's problems.
                </p>

                <p>
                  Although I specialise and see myself as a{" "}
                  <span>Frontend </span> Web Developer ,I also have kwnoledge
                  and working experience with backend technologies.
                </p>
                <p>
                  Below you will see some of the technologies that I work with
                  but also the certifications I got. <br /> Please feel free to{" "}
                  <span className="c">
                    <a href="#contact">contact me</a>{" "}
                  </span>{" "}
                  if you have any query.
                </p>
              </div>
            </div>
            <div className="about__personal--tech">
              <div className="tech">
                <div className="title">
                  <p>What I use :</p>
                </div>

                <p>
                  <span className="front">Frontend:</span> HTML5, CSS3, SASS,
                  JAVASCRIPT, REACT.JS, REACT NATIVE, REDUX, PHOTOSHOP,
                </p>

                <p>
                  <span className="back">Backend :</span> NODE, EXPRESS,
                  MONGODB,{" "}
                </p>
                <p>
                  <span className="tools">Tools :</span> GIT, NPM
                </p>
              </div>
            </div>
            <div className="about__personal--tech">
              <div className="tech">
                <div className="title">
                  <p>What I have :</p>
                </div>

                <ul>
                  <li>Computer Science Degree</li>
                  <li>And more to come ...</li>
                </ul>
              </div>
            </div>
            <div className="about__personal--tech">
              <div className="tech">
                <div className="title">
                  <p>Availability (Open for):</p>
                </div>

                <ul>
                  <li>Job offer</li>
                  <li>And freelance work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="contact__content">
          <div className="contact__content--top">
            <div className="title">
              <p>Get In Touch</p>
            </div>
            <div className="email">
              <h2>rahanbouess@outlook.com</h2>
            </div>
            <div className="text container">
              <p>
                Feel free to contact me if you have any query <br />{" "}
                <span>or </span>
                <br /> connect with me through my social accounts.{" "}
              </p>
            </div>
            <div className="social">
              <span>
                <a
                  class="twitter"
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/rahan-bakala-bouess-25714a204"
                >
                  <img src={linkedin} alt="linkedin " />
                </a>
              </span>
              <span>
                <a
                  class="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Absolu242"
                >
                  <img src={github} alt="github " />
                </a>
              </span>
              <span>
                <a
                  class="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/rahan_bouess/ "
                >
                  <img src={instagram} alt="instagram " />
                </a>
              </span>

              {/* <span>
                <a href="#">FACEBOOK</a>
              </span>
              <span>
                <a href="#">TWITTER</a>
              </span>
              <span>
                <a href="#">INSTAGRAM</a>
              </span> */}
            </div>
          </div>
          <div className="contact__bar">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
