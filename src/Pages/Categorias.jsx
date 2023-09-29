import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { questions } from '../Data'
import Question from '../Components/Question';

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

const Categorias = () => {
  const { category } = useParams()
    console.log(category)

    const [questionsFiltered, setQuestionsFiltered] = useState(
      questions.filter(question => question.category === category)
      );

      useEffect(() => {
const newQuestions = shuffleArray(questionsFiltered);
setQuestionsFiltered(newQuestions);
      }, []);
  
  return (
    <div className='container flex flex-col items-center justify-center gap-10'
     style={{height: 'calc(100vh - 5rem)' }}
    >
   <Question />
    </div>
  )
}

export default Categorias
