import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of United States?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Washington DC', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Facebook ?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Mark Zuckenberg', isCorrect: true },
			],
		},
		{
			questionText: 'The Android was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Google', isCorrect: true },
			],
		},
		{
			questionText: 'What is the native language of Iphone ?',
			answerOptions: [
				{ answerText: 'React', isCorrect: false },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Javascript', isCorrect: false },
				{ answerText: 'Swift', isCorrect: true },
			],
		},
    {
			questionText: 'What is the native language of Android ?',
			answerOptions: [
				{ answerText: 'React', isCorrect: false },
				{ answerText: 'Java', isCorrect: true },
				{ answerText: 'Javascript', isCorrect: false },
				{ answerText: 'Swift', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
          
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
          <h4>Demo Quiz App Nguyen 2023</h4>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
      
		</div>
	);
}