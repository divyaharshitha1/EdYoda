import { BsFillHeartFill } from "react-icons/bs";
import "./index.css";

const Section2 = () => (
  <div className="section2-container">
    <h1 className="edward-heading">At EdYoda,</h1>
    <p className="section2-para">Get real skills, not just degrees!</p>
    <div className="skills-row">
      <img
        src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674837513/Loos-You-Got-This_pgiqhe.jpg"
        alt="Loos You Got This"
        className="real-skills-image"
      />
      <div className="suggestions-list">
        <div className="ways-container">
          <p className="ways-para">Learn job-focussed skills</p>
        </div>
        <div className="ways-container">
          <p className="ways-para">Industry accepted certificates</p>
        </div>

        <div className="ways-container">
          <p className="ways-para">Job Opportunities</p>
        </div>
      </div>
    </div>
    <div className="users-row">
      <div className="users-content">
        <h1 className="users-count">300,000+</h1>
        <div className="users-edyoda">
          <p className="users-head">users</p>
          <BsFillHeartFill className="heart-icon" />
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674840160/6b9b7363ef364620ab0214f070bf2dd0_xyfytd.png"
            alt="logo"
            className="edyoda-logo"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Section2;
