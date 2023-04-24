import Quiz from 'react-quiz-component';
import React from 'react';
import {exportquiz} from './quiztemplate';

function QuizTemp() {
      return  <div className="quiz-main">      
        <Quiz quiz={exportquiz}/> 
      </div>;   // Här hämtas exportquiz från databasen i fortsättningen. Just nu från filen quiztemplate.
    }

export default QuizTemp;

// to import from this file: import Quiz from './Components/Quizes/quiz';
// reference a Quiz by typing; <Quiz />
// It is not yet added how specific quiz is selected. <Quiz /> right now runs a quiz made for the sprint demo.