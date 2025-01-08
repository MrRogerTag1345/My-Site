import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa'; // Example icons
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
          icon={<FaGraduationCap />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Jean Augustine Seconday School</h3>
          <h4 className="vertical-timeline-element-subtitle">Brampton, ONT</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>2020 - present</span>}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ffffff' }}
          icon={<FaGraduationCap />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Wilfrid Laurier University</h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ONT</h4>
          <p>
            During my studies at Wilfrid Laurier University, I gained a comprehensive understanding of key Computer Science disciplines including Algorithms,
            Data Structures, Machine Learning, Artificial Intelligence, Compilers, and Operating Systems. Through rigorous coursework,
            I developed strong analytical and problem-solving skills, mastering complex algorithms and efficient data structures that form the backbone of software development.
            My exposure to Machine Learning and AI involved hands-on projects and practical applications, allowing me to explore predictive modeling and intelligent systems.
            Courses in Compilers and Operating Systems provided me with deep insights into the inner workings of software and hardware integration,
            enhancing my proficiency in system-level programming and optimization.
            These foundational topics have equipped me with the technical expertise and critical thinking abilities essential for tackling real-world challenges in the tech industry.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>2021 - 2022</span>}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          icon={<FaBriefcase />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Advanced Servo Technologies Inc</h3>
          <h4 className="vertical-timeline-element-subtitle">Brampton, ONT</h4>
          <p style={{ color: "black"}}>
            Purchasing Assistant/ Technician Assistant 
            <p></p>
            <br />
            <span className="bullet-point">&bull; Optimized Component Procurement: Successfully procured replacement components including capacitors, integrated circuits, transistors, resistors, and transformers, resulting in a 10% improvement in purchasing decisions. </span>
            <br />
            <span className="bullet-point">&bull; Enhanced Time Management: Assisted technicians in researching and identifying suitable replacement units, leading to a 20% improvement in time management.</span>
            <br />
            <span className="bullet-point">&bull; Customer Order Management: Efficiently managed customer orders using Salesforce, ensuring accurate and timely processing.</span>
            <br />
            <span className="bullet-point">&bull; Supplier and Distributor Coordination: Collaborated with suppliers and distributors to ensure timely receipt of parts, maintaining seamless operations.</span>
          </p>

          <a href="https://www.servo1.com/" target="_blank" rel="noopener noreferrer">
            <button className="custom-button-1" >AST</button>
          </a>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>2022 - present</span>}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          icon={<FaBriefcase />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Delivery Driver</h3>
          <h4 className="vertical-timeline-element-subtitle">Brampton, ONT</h4>
          <p>
            During my tenure in the food service industry, I efficiently managed the delivery of food to customers,
            ensuring timely and accurate service. I occasionally served as a kitchen assistant, contributing to the
            preparation and organization of meals. Additionally, I maintained a clean and sanitary environment by
            diligently cleaning the restaurant. My role also involved assisting the cook with various tasks, demonstrating flexibility
            and a proactive approach to supporting kitchen operations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: 'white' }}>Jun 2024 - Sept 2024</span>}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
          icon={<FaBriefcase />} // Placeholder icon
        >
          <h3 className="vertical-timeline-element-title">Mycro Harvest Inc</h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ONT</h4>
          <p>
            <span className="bullet-point">&bull; Revamped Dashboard Front-End. </span>
            <br />
            <span className="bullet-point">&bull; Enhanced user interface and visual design for a more engaging user experience. </span>
            <br />
            <span className="bullet-point">&bull; Revamped API and Dashboard Back-End. </span>
            <br />
            <span className="bullet-point">&bull; Achieved a 40% reduction in space consumption and a remarkable 70% improvement in speed optimization, delivering a more efficient and responsive system. </span>
            <br />
            <span className="bullet-point">&bull; Developed and implemented a system for data acquisition and the precise annotation of mushroom characteristics. </span>
            <br />
          </p>

          <a href="https://www.mycroharvest.com/" target="_blank" rel="noopener noreferrer">
            <button className="custom-button-2" style={{ backgroundColor: "#E8D037", color: "#000000"}}>Mycro Harvest</button>
          </a>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fffff' }}
          icon={<FaStar />} // Placeholder icon
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
