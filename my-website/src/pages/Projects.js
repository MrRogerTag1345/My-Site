import React from 'react';
import GridLinks from '../components/GridLinks';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  const weblinks = [
    {
      text: 'Fuel Economy Calculator',
      url: '',
      description: "This webpage is my introduction to creating Webpages using HTML and CSS. This website was create to track fuel expenses per communite to school and back. Since I communite to school(waterloo) during the weekdays, I have driven thousands' of kilometres. In order to track my monthly expenses, and to inform me about how much I am spending on fuel. This website give's me a break down of all the information I would need.",
      additionalLinks: [
        { text: 'Website', url: 'https://mrrogertag1345.github.io/Fuel-Economy-Logger/index.html', external: true  }, 
        { text: 'GitHub', url: 'https://github.com/MrRogerTag1345/Fuel-Economy-Logger', external: true }
      ]
    },
    {
      text: 'Student-Financial-App',
      url: '',
      description: 'Within this project I took on the role of Project Manager. This project is a web application that is intended to help students manage there finances.It offers tools to track the budget/ balance to setting financial goals.',
      additionalLinks: [
        { text: 'More Info', url: '/Student-Financial-App/info' }, // Will have to add an info page.
        { text: 'GitHub', url: 'https://github.com/lorandkis/Student-Financial-App', external: true }
      ]
    }
  ];

  const pythonlinks = [
    {
      text: 'Discord Stock Bot',
      url: '/Discord-Stock-Bot/info',
      description: "This Discord Bot is a sophisticated tool designed to retrieve the URL of a specified stock effortlessly and dynamically incorporate it into a link.",
      additionalLinks: [
        { text: 'GitHub', url: 'https://github.com/MrRogerTag1345/Fuel-Economy-Logger', external: true }
      ]
    },
  ];

  const mllinks = [
    {
      text: 'Machine Learning Project 1',
      url: '/ML1/info',
      description: "This project consists of 3 tasks. Acquire a dataset and clean the dataset if necessary. Next is to implement k-nearest neighbor and Logistic Regression.",
      additionalLinks: [
        { text: 'GitHub', url: 'https://github.com/CP322-Machine-Learning-Group/Mini-Project-1', external: true }
      ]
    },
    {
      text: "Machine Learning Project 2",
      url: '/ML2/info',
      description: "Implement five different classifications. These models include Logistic regression, Decision trees, Support vector machines, Adaboost, and random forest, and will be applied to two text-based data sets. We have compared the accuracy and efficiency of all five models on the datasets. The results showed that trees had a lower efficiency and sometimes lower accuracy than the linear-based models. We believe this to be the result of numerous amounts of branches, due to the classification style of tree-based models.",
      additionalLinks: [
        { text: 'GitHub', url: 'https://github.com/CP322-Machine-Learning-Group/Mini-Project-2', external: true }
      ]
    },
    {
      text: "Machine Learning Project 3",
      url: '/ML3/info',
      description: "This project worked with, ANN, and NLP.",
      additionalLinks: [
        { text: 'GitHub', url: 'https://github.com/CP322-Machine-Learning-Group/Mini-Project-3', external: true }
      ]
    }
  ];

  /*
  const courselinks = [
    {
      text: 'CP',
      url: '/ML1/info',
      description: "This project consists of 3 tasks. Acquire a dataset and clean the dataset if necessary. Next is to implement k-nearest neighbor and Logistic Regression.",
      additionalLinks: [
        { text: 'GitHub', url: 'https://github.com/CP322-Machine-Learning-Group/Mini-Project-1', external: true }
      ]
    }
  ];
  */

  return (
    <div className="page-container">
      <main className="projects-content">
        <h1>Projects Page</h1>
        <h2>Web Development</h2>
        <GridLinks links={weblinks} />

        <h2>Python Project</h2>
        <GridLinks links={pythonlinks} />

        <h2>Machine Learning</h2>
        <GridLinks links={mllinks} />

        {/*
        <h2>Course Notes</h2>
        <GridLinks links={mllinks} />
        */}
      </main>
    </div>
  );
};

export default Projects;
