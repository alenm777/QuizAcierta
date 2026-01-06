import React, { useEffect, useState } from 'react';
import Resultados from './Resultados';

const Question = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!filteredQuestion) return;

    const allAnswers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ].sort(() => Math.random() - 0.5);

    setAnswers(allAnswers);
  }, [filteredQuestion]);

  const checkAnswer = (answer) => {
    if (answer === filteredQuestion.correct_answer) {
      setScore(prev => prev + 1);
    }
    setSelected(answer);
    setAnswered(true);
  };

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelected(null);
    setAnswered(false);
  };

  const resetQuiz = () => {
    setScore(0);
    setIndexQuestion(0);
    setActiveQuiz(false);
  };

  if (showResults) {
    return (
      <Resultados
        score={score}
        questionsFiltered={questionsFiltered}
        onReset={resetQuiz}
      />
    );
  }

  return (
    <div className="flex flex-col justify-between shadow-md w-[600px] h-[600px] p-8 rounded-lg">
      <div className="flex justify-between font-bold">
        <span>{indexQuestion + 1} / {questionsFiltered.length}</span>
        <span>Dificultad: {filteredQuestion.difficulty}</span>
      </div>

      <h2
        className="font-bold text-lg"
        dangerouslySetInnerHTML={{ __html: filteredQuestion.question }}
      />

      <div className="grid grid-cols-2 gap-4">
        {answers.map(answer => (
          <button
            key={answer}
            onClick={() => checkAnswer(answer)}
            disabled={answered}
            className={`border p-4 rounded-lg font-medium
              ${
                answered
                  ? answer === filteredQuestion.correct_answer
                    ? 'bg-green-500'
                    : answer === selected
                    ? 'bg-red-500'
                    : ''
                  : 'hover:scale-105'
              }
            `}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>

      {indexQuestion + 1 === questionsFiltered.length ? (
        <button
          onClick={() => setShowResults(true)}
          className="border-2 border-yellow-600 text-yellow-600 rounded-md py-2 hover:bg-yellow-600 hover:text-black"
        >
          Finalizar
        </button>
      ) : (
        <button
          onClick={nextQuestion}
          className="border-2 border-yellow-600 text-yellow-600 rounded-md py-2 hover:bg-yellow-600 hover:text-black"
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Question;