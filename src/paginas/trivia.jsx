import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../estilos/TriviaGameStyle.css'
import Header from '../componentes/encabezado';
import Footer from '../componentes/footer';

const TriviaGame = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState(Array(20).fill(''));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showAnswers, setShowAnswers] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=20&category=15');

                // Ajustar la estructura de las preguntas
                const adjustedQuestions = response.data.results.map((question) => {
                    // Mezclar las respuestas correctas e incorrectas
                    const answers = [question.correct_answer, ...question.incorrect_answers];
                    // Ordenar aleatoriamente las respuestas
                    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

                    return {
                        ...question,
                        answers: shuffledAnswers,
                    };
                });

                setQuestions(adjustedQuestions);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener preguntas:', error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (selectedAnswer) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
        setUserAnswers(updatedUserAnswers);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        setShowAnswers(true);

        // Calcular el número de respuestas correctas e incorrectas
        const correctCount = questions.reduce((acc, question, index) => {
            return question.correct_answer === userAnswers[index] ? acc + 1 : acc;
        }, 0);

        setCorrectAnswersCount(correctCount);
        setIncorrectAnswersCount(20 - correctCount);
    };

    return (
        <>
            <div className='trivia-body'>
            <Header />
                <div className="trivia-container">
                    <h1>¿Qué tan gamer eres?</h1>
                    {loading && <p>Cargando preguntas...</p>}
                    {!loading && questions.length > 0 && (
                        <div className="question-container">
                            <strong>Pregunta {currentQuestionIndex + 1}:</strong>
                            <div dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }} />
                            {questions[currentQuestionIndex].answers ? (
                                questions[currentQuestionIndex].answers.map((answer, answerIndex) => (
                                    <div key={answerIndex} className="answer-option">
                                        <label>
                                            <input
                                                type="radio"
                                                value={answer}
                                                checked={userAnswers[currentQuestionIndex] === answer}
                                                onChange={() => handleAnswerChange(answer)}
                                            />
                                            {answer}
                                        </label>
                                    </div>
                                ))
                            ) : (
                                <p>No hay respuestas disponibles para esta pregunta.</p>
                            )}
                            <div className="navigation-buttons">
                                <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
                                    Anterior
                                </button>
                                <button onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
                                    Siguiente
                                </button>
                                <button onClick={calculateScore} disabled={currentQuestionIndex !== questions.length - 1}>
                                    Calcular Respuestas
                                </button>
                            </div>
                        </div>
                    )}
                    {showAnswers && (
                        <div className="result-container">
                            <h3>Respuestas del Usuario:</h3>
                            <ul>
                                {userAnswers.map((answer, index) => (
                                    <li key={index}>
                                        <strong>Pregunta {index + 1}:</strong> {answer || 'No respondida'}
                                    </li>
                                ))}
                            </ul>
                            <h3>Respuestas Correctas:</h3>
                            <ul>
                                {questions.map((question, index) => (
                                    <li key={index}>
                                        <strong>Pregunta {index + 1}:</strong> {question.correct_answer}
                                    </li>
                                ))}
                            </ul>
                            <h3>Resultados:</h3>
                            <p>Preguntas Correctas: {correctAnswersCount}</p>
                            <p>Preguntas Incorrectas: {incorrectAnswersCount}</p>
                        </div>
                    )}
                </div>
                <br />
                <Footer />
            </div>
        </>
    );
};

export default TriviaGame;