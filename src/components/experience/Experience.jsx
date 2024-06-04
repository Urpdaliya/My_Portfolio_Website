import React, { useState, useEffect } from "react";
import "./Experience.css";
import { SlCalender } from "react-icons/sl";

const Experience = ({ state }) => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const { contract } = state;
    const fetchData = async () => {
      if (contract) {
        // Fetch education details
        const educationResult = await contract.methods.allEducationDetails().call();
        setEducation(educationResult);

        // Fetch experience details
        const experienceResult = await contract.methods.allExperienceDetails().call();
        setExperience(experienceResult);
      }
    };
    fetchData();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education </h1>

      <div className="container">
        {/* Education */}
        <div className="education">
          <h1 className="edu-title">Education</h1>
          {education.map((edu) => (
            <div key={edu.id} className="edu-card">
              <p className="card-text1">
                <SlCalender className="icon" /> {edu.date}
              </p>
              <h3 className="card-text2">{edu.degree}</h3>
              <p className="card-text3">{edu.knowledgeAcquired}</p>
              <p className="card-text4">{edu.institutionName}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="experience">
          <h1 className="exp-title">Experience</h1>
          {experience.map((exp) => (
            <div key={exp.id} className="exp-card">
              <p className="card-text1">
                <SlCalender className="icon" /> {exp.date}
              </p>
              <h3 className="card-text2">{exp.post}</h3>
              <p className="card-text3">{exp.knowledgeAcquired}</p>
              <p className="card-text4">{exp.companyName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
