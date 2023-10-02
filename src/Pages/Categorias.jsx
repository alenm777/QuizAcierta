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

      const [indexQuestion, setIndexQuestion] = useState(0);
      const [activeQuiz, setActiveQuiz] = useState(second)
      

      useEffect(() => {
const newQuestions = shuffleArray(questionsFiltered);
setQuestionsFiltered(newQuestions);
      }, []);
  
  return (
    <div className='container flex flex-col items-center justify-center gap-10'
     style={{height: 'calc(100vh - 5rem)' }}
    >
      {activeQuiz ? (
    <Question
    filteredQuestion={questionsFiltered[indexQuestion]}
    setIndexQuestion={setIndexQuestion}
    indexQuestion={indexQuestion}
    questionsFiltered={questionsFiltered}
    setActiveQuiz={setActiveQuiz}
    />) : (   
     <>
     <div className='flex flex-col gap-5'>
<h1 className='text-3x1 text-teal-900 text-center font-bold'>
  {category}
</h1>

<div className='flex justify-center items-center'>
<img src={algo} alt={category} className='w-72' />
</div>
     </div>

     <button className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
     onClick={() => setActiveQuiz(true)}
     >
Iniciar Quiz
     </button>
      </> 
      )}
    </div>
  )
}

export default Categorias
