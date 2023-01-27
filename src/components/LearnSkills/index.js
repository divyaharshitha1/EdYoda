import { CiSearch } from "react-icons/ci";
import "./index.css";

const LearnSkills = () => (
  <div className="app-container">
    <nav className="nav-bar">
      <div className="nav-menu">
        <ul className="menu-list">
          <li className="website-logo">EDYODA</li>
          <li className="menu-item">Courses</li>
          <li className="menu-item">University</li>
          <li className="menu-item">Placements</li>
        </ul>
        <ul className="menu-list">
          <CiSearch size={20} color="#ffffff" />
          <li className="menu-item">Login</li>
          <li className="menu-item">Join Now</li>
        </ul>
      </div>
    </nav>
    <div className="learn-skills-container">
      <div className="content">
        <h1 className="heading">Learn Skills, Get Jobs</h1>
        <p className="para">Anytime.Anywhere.At zero cost</p>
        <div className="buttons-list">
          <button className="button1" type="button">
            VIEW COURSES
          </button>
          <button className="button2" type="button">
            JOIN NOW
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674832850/learn-new-skill1-1038x500_gp5duy.jpg"
          alt="learn new skill1"
          className="skills-image"
        />
      </div>
    </div>
    <div className="hiring-partners">
      <p className="hiring-para">Hiring Partners</p>
      <ul className="logos-list">
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674834746/NE67320LOGO_dn7dmn.jpg"
          alt="logo"
          className="logo-image"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674834990/Capgemini-Logo_xbzn0o.png"
          alt="Capgemini Logo"
          className="logo-image1"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674835459/2560px-Tata_Consultancy_Services_Logo.svg_ge6smu.png"
          alt="2560px Tata_Consultancy_Services_Logo"
          className="logo-image"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674835674/2560px-Infosys_logo.svg_t6ostc.png"
          alt="Infosys logo"
          className="logo-image"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674835794/Cognizant-Logo_b2wxqp.png"
          alt="Cognizant Logo"
          className="logo-image1"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674835911/2560px-Honeywell_logo.svg_yh83ie.png"
          alt="Honeywell Logo"
          className="logo-image"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674836011/Accenture-logo_ngd81s.png"
          alt="Accenture logo"
          className="logo-image2"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674836295/IBM_logo_jiwunn.svg"
          alt="IBM logo"
          className="logo-image4"
        />
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674836424/Wipro_Logo_Secondary_Color_Digital_sqlakn.svg"
          alt="Wipro logo"
          className="logo-image4"
        />
      </ul>
    </div>
  </div>
);

export default LearnSkills;
