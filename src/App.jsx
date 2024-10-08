import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faQuora, faLinkedin, faGooglePlusG, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>
       <header id="body-header">
        <nav>

            <ul className="horizontal-list text-center nav-menu">
                <li>
                    <a href="#"> Home </a>
                </li>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#skills"> Skills </a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </nav>

        <div id="name-social-container">
            <div className="text-center">
                <h1 id="my-name">
                    Mayank Taneja 
                </h1>
            </div>
            <div>
                <ul className="horizontal-list text-center social-icons">
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faQuora}></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>

            </div>

        </div>

    </header>
    <main>

        <section id="about">
            <div id="my-image">
                <img src="../public/Mayank-image-white-bg_new_1.png"/>
            </div>

            <div id="about-para">

                <p>
                    Hello , Myself ,Mayank Taneja , a second year CSE undergraduate student of Delhi Technological University.
                    I am a full stack MERN Developer and loves to build websites and work on new project and learn from them.
                    I also have a keen interest in DSA and CP and like solving problems. 
                </p>

            </div>

        </section>



        <section id="skills">
            <h1 className="section-heading mb75px ">
                <span>
                    <i className="fas fa-chalkboard-teacher"></i>
                </span>
                <span> SKILLS </span>
            </h1>

            <div className="skills-display">

                <div className="skill-progress">
                    <div className="eighty-percent mb-blue">
                        <div className="skill-name">
                            <span> C++ </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="seventy-percent mb-light-purple">
                        <div className="skill-name">
                            <span> C </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="fifty-percent mb-teal">
                        <div className="skill-name">
                            <span> Java </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="ninty-percent mb-orange">
                        <div className="skill-name">
                            <span> HTML </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-five-percent mb-light-purple">
                        <div className="skill-name">
                            <span> CSS </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-percent mb-teal">
                        <div className="skill-name">
                            <span> Javascript </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-percent mb-blue">
                        <div className="skill-name">
                            <span> NodeJs </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-percent mb-light-purple">
                        <div className="skill-name">
                            <span> MongoDB </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-percent mb-blue">
                        <div className="skill-name">
                            <span> ExpressJS </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="seventy-percent mb-orange">
                        <div className="skill-name">
                            <span> ReactJS </span>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section id="experience">

            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-briefcase"></i>
                </span>
                <span> Work Experience </span>
            </h1>

            <div className="timeline">

                <div className="timeline-box ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="../public/ecell.jpeg"/>
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Corporate Executive </h3>
                        <h4 className="experience-company-name"> E-Cell DTU </h4>
                        <h5 className="experience-duration m0"> 09/2023 - Present </h5>

                        <p className="experience-description text-align-justify"> For 17 years, E-Cell DTU has championed an
                             entrepreneurial ethos, guiding students with the expertise of venture capitalists and industry leaders.
                              Our mission is to nurture 'CREATORS' transcending traditional education by promoting values of
                               productivity, innovation, and independent thinking. E-Cell DTU inspires 'CHANGE' by instilling 
                               out-of-the-box ideas and equipping individuals to be architects of transformation. We are dedicated
                                to shaping engineers who actively contribute to a future defined by innovation and impact.
 </p>
                    </div>
                </div>
                
                <div className="timeline-box right ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="../public/bb.jpeg"/>
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Member </h3>
                        <h4 className="experience-company-name"> Business Bulls,DTU </h4>
                        <h5 className="experience-duration m0"> 09/2023 - Present </h5>
                        <p className="experience-description text-align-justify">Businell Bulls is DTU's powerhouse for aspiring 
                            entrepreneurs, innovators, and changemakers! 💡 At Business Bulls, we don't just dream big—we make it 
                            happen. From building startups and hosting competitions to providing mentorship and networking opportunities
                            , we're creating the ultimate space for turning ideas into reality. </p>
                    </div>
                </div>

                <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="../public/gdsc.jpeg"/>
                        </div>
                        <h3 className="experience-designation m0 m-blue"> Web Developer </h3>
                        <h4 className="experience-company-name"> GDSC DTU </h4>
                        <h5 className="experience-duration m0"> 10/2024 - Present </h5>

                        <p className="experience-description text-align-justify">Google Developer Student Club (GDSC) is a Google Developers
                             program for university students to learn mobile and web development skills. The club will be open to any student
                             , ranging from novice developers who are just starting, to advanced developers who want to further their skills.
                              The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web 
                              development problems.
                         </p>
                    </div>
                </div>

                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <div>
                           
                           <i className="fas fa-plane"></i>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section id="education">

            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-graduation-cap"></i>
                </span>
                <span> Education </span>
            </h1>

            <div className="timeline">

                <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="../public/lasss.png"/>
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Secondary School </h3>
                        <h4 className="experience-company-name "> Little Angels School ,Sonipat </h4>
                        <h5 className="experience-duration m0"> 04/2011 - 03/2021 </h5>

                    </div>
                </div>
                
                <div className="timeline-box right ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="../public/sant gyaneshwar.jpeg"/>
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Higher Secondary School </h3>
                        <h4 className="experience-company-name "> Sant Gyaneshwar School,Alipur </h4>
                        <h5 className="experience-duration m0"> 04/2021 - 04/2023 </h5>
                    </div>
                </div>

                <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="../public/dtu.jpeg"/>
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Bachelors of Technology </h3>
                        <h5 className="experience-designation  m0 m-blue"> Computer Science </h5>
                        <h4 className="experience-company-name "> Delhi Technological University </h4>
                        <h5 className="experience-duration m0"> 08/2023 - 05/2027 </h5>

                    </div>
                </div>
                
                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <div>
                            <i className="fas fa-car-side"></i>
                          
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section id="portfolio">
            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-th-list"></i>
                </span>
                <span> Portfolio </span>
            </h1>

            <div id="portfolio-container">

                <div className="portfolio-image-container">
                    <img src="../public/dsa.png"/>
                    <div className="portfolio-details">
                        <p>
                            DSA Completion Certificate from Coding Ninjas
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="../public/nodejs.png"/>
                    <div className="portfolio-details">
                        <p>
                            NodeJS Completion Certificate from Coding Ninjas
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="../public/react.png"/>
                    <div className="portfolio-details">
                        <p>
                            React Completion Certificate from Coding Ninjas
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="../int-o-view.png"/>
                    <div className="portfolio-details">
                        <p>
                            AI Interview Website built using MERN.
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="../tripon.png"/>
                    <div className="portfolio-details">
                        <p>
                            Travel Advisory Website built on MVC Model.
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="../extension_outreach.png"/>
                    <div className="portfolio-details">
                        <p>
                            Centre of Extension and Field Activities DTU Website 
                        </p>
                    </div>

                </div>

            </div>
        </section>

        <section id="contact">
            <h1 className="section-heading mb50px">
                <span>
                    <i className="far fa-address-card"></i>
                </span>
                <span> Contact </span>
            </h1>
            <div id="contact-container">

                <div id="contact-form-container">
                    <form id="contact-form">
                        <input id="input-name" name="name" type="text" placeholder="Your Name"/>
                        <input id="input-email" name="input-email" type="text" required placeholder="Your Email"/>
                        <textarea id="input-message" name="input-message" rows="2" cols="40" placeholder="Message"></textarea>
                        <button className="sub-btn" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
    
                <div id="my-details-container">

                    <h3> Get In touch </h3>

                    <h3> My Address </h3>
                    <div className="my-details-info-container">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Sonipat, Haryana, India</span>
                    </div>
                    <div className="my-details-info-container">
                        <i className="fas fa-mobile-alt"></i>
                        <span>9863487216</span>
                    </div>
                    <div className="my-details-info-container">
                        <i className="far fa-envelope"></i>
                        <span>tanejamayank21@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="text-center social-icons">

                <ul className="horizontal-list">

                    <li>
                        <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-quora"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    </main>
    </>
  )
}

export default App
