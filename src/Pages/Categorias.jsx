import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgs } from '../Data';
import Question from '../Components/Question';

const categoryMap = {
  Ciencia: 17,
  Deportes: 21,
  Filosofía: 20,
  Geografía: 22,
  Historia: 23,
  Literatura: 10,
  Tecnología: 18,
};

const Categorias = () => {
  const { category } = useParams();

  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [loading, setLoading] = useState(false);

  const [imgCategory] = imgs.filter(img =>
    img.toLowerCase().includes(category.toLowerCase())
  );

  const fetchQuestions = async () => {
    setLoading(true);
    const categoryId = categoryMap[category];
    const url = `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`;

    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setLoading(false);
  };

  const startQuiz = async () => {
    await fetchQuestions();
    setIndexQuestion(0);
    setActiveQuiz(true);
  };

  return (
    <div
      className="container flex flex-col items-center justify-center gap-10"
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      {activeQuiz ? (
        loading ? (
          <p className="text-xl font-bold">Cargando preguntas...</p>
        ) : (
          <Question
            filteredQuestion={questions[indexQuestion]}
            questionsFiltered={questions}
            indexQuestion={indexQuestion}
            setIndexQuestion={setIndexQuestion}
            setActiveQuiz={setActiveQuiz}
          />
        )
      ) : (
        <>
          <h1 className="text-3xl font-bold text-teal-900">{category}</h1>

          <img src={imgCategory} alt={category} className="w-72" />

          {/* selector dificultad */}
          <div className="flex gap-3">
            {['easy', 'medium', 'hard'].map(level => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`px-4 py-2 rounded-lg font-bold border
                  ${
                    difficulty === level
                      ? 'bg-yellow-500 text-black'
                      : 'bg-white'
                  }`}
              >
                {level === 'easy'
                  ? 'Fácil'
                  : level === 'medium'
                  ? 'Medio'
                  : 'Difícil'}
              </button>
            ))}
          </div>

          <button
            onClick={startQuiz}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Iniciar Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default Categorias;