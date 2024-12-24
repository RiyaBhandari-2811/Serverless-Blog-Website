import { Button, Container } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="header">
        <span>Hi, I'm</span>
        <h2>Manoj Aher</h2>
        <span>Bengaluru, KA</span>
        <Button className="downloadCV" variant="contained" size="medium" href="/assets/pdf/samplePdf.pdf" download="samplePdf.pdf">
          Download CV
        </Button>
      </div>
      <div className="content">
        <Container className="summary">
          <p className="summaryHeader">Summary</p>
          <div className="summaryContent">
            <img
              src="/assets/images/ProfilePicture.jpg"
              alt="Manoj Aher"
              loading="lazy"
            />
            <p className="summaryText">
              Experienced iOS developer proficient in Objective-C, Swift, and
              SwiftUI, with a strong track record of delivering high-quality
              mobile applications. Adept at leading development teams while
              maintaining hands-on coding expertise. Skilled in all stages of
              the development lifecycle, from concept to deployment. Strategic
              thinker with a passion for innovation and a commitment to
              delivering results that align with business objectives. Training
              professional with extensive leadership experience in staff
              development, process and productivity improvements, performance
              management, and curriculum design.
            </p>
          </div>
        </Container>
        <Container className="workHistory">
          <p className="workHistoryHeader">Work History</p>
          <div className="companyInfo">
            <p className="companyName">Athna Health</p>
            <p className="role">Development Manager (LMTS)</p>
            <p className="year">11.2017 - Current</p>
          </div>
          <ul className="jobOverview">
            <li>
              Added an Ambient Intelligence feature, empowering providers to
              make informed care decisions, alleviating nurse burnout, and
              enhancing patient safety
            </li>
            <li>
              Achieved a 50% reduction in documentation time and a 20% revenue
              increase for the athenaOne app
            </li>
            <li>
              Added Voice Assistant and Dictation to reduce charting time and
              improve decision-making
            </li>
            <li>
              Enhanced the EHR with intelligence for quicker actions on patient
              charts
            </li>
            <li>
              Improved application performance, reducing load times by 40% and
              increasing user retention by 15%
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default About;
