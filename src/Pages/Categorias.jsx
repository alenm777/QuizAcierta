import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgs, categories } from '../Data';
import Question from '../Components/Question';

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

const Categorias = () => {
  const { category } = useParams(); // ej: "filosofia"
  
  const categoryKeys = Object.keys(categories);
  const categoryIndex = categoryKeys.indexOf(category);

  const imgCategory = imgs[categoryIndex];
  const categoryTitle = categories[category];

  const [questionsFiltered, setQuestionsFiltered] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('easy'); // selector de dificultad

  useEffect(() => {
    // Resetear todo al cambiar de categoría
    setIndexQuestion(0);
    setActiveQuiz(false);
    setShowResults(false);
    setScore(0);

    // Fetch de la API
    const fetchQuestions = async () => {
      const res = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple`);
      const data = await res.json();
      if (data.results) {
        setQuestionsFiltered(shuffleArray(data.results));
      }
    };

    fetchQuestions();
  }, [categoryTitle, difficulty]);

  const handleResetQuiz = () => {
    setActiveQuiz(false);
    setShowResults(false);
    setIndexQuestion(0);
    setScore(0);
  };

  const currentQuestion = questionsFiltered[indexQuestion];

  return (
    <div className="container flex flex-col items-center justify-center gap-10"
         style={{height: 'calc(100vh - 5rem)'}}>

      {!activeQuiz && !showResults && (
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-3xl text-teal-900 text-center font-bold">
            {categoryTitle}
          </h1>
          <div className="flex justify-center items-center">
            <img
              src={imgCategory}
              alt={categoryTitle}
              className="w-72"
            />
          </div>
          <div className="flex gap-3">
            <label>Dificultad:</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="easy">Fácil</option>
              <option value="medium">Medio</option>
              <option value="hard">Difícil</option>
            </select>
          </div>
          <button
            className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={() => {
              if (questionsFiltered.length > 0) setActiveQuiz(true);
              else alert('No hay preguntas para esta categoría');
            }}
          >
            Iniciar Quiz
          </button>
        </div>
      )}

      {activeQuiz && currentQuestion && (
        <Question
          filteredQuestion={currentQuestion}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
          score={score}
          setScore={setScore}
          setShowResults={setShowResults}
        />
      )}

      {showResults && (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-5">{categoryTitle} - Resultados</h1>
          <div className="text-center text-xl mb-5">
            Tu puntaje: {score} de {questionsFiltered.length} ({((score/questionsFiltered.length)*100).toFixed(0)}%)
          </div>
          <button
            className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={handleResetQuiz}
          >
            Volver a Categorías
          </button>
        </div>
      )}

    </div>
  );
};

export default Categorias;