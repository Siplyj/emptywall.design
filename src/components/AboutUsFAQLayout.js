import { useState, useRef } from 'react';

import classes from './AboutUsFAQLayout.module.css';

import { useTranslation } from 'react-i18next';

function AboutUsFAQLayout() {
	const { t } = useTranslation();

	const [activeQuestion, setActiveQuestion] = useState(null);
	const answerRef = useRef(null);

	const questions = [
		{ id: 1, question: `${t('about_us.question_1')}`, answer: `${t('about_us.answer_1')}`},
		{ id: 2, question: `${t('about_us.question_2')}`, answer: `${t('about_us.answer_2')}`},
		{ id: 3, question: `${t('about_us.question_3')}`, answer: `${t('about_us.answer_3')}`},
		{ id: 4, question: `${t('about_us.question_4')}`, answer: `${t('about_us.answer_4')}`},
		{ id: 5, question: `${t('about_us.question_5')}`, answer: `${t('about_us.answer_5')}`},
		{ id: 6, question: `${t('about_us.question_6')}`, answer: `${t('about_us.answer_6')}`}
	];


	const switchAnswers = (questionId) => {
		setActiveQuestion((prevQuestion) =>
			prevQuestion === questionId ? null : questionId
		);
	};

	return (
		<div className={classes.faq_block_wrapper} >
			<h1 className={`block_title ${classes.faq_block_title}`} >
				{t('about_us.question_title')}
			</h1>
			
			<span className={`block_description ${classes.faq_block_description}`}>
				{t('about_us.question_description')}
			</span>
			<div className={classes.faq_questions_wrapper}>
				<div className={classes.faq_questions}>

					{questions.map((q) => (

						<div className={classes.faq_questions_block} key={q.id}>

							<span
								className={activeQuestion === q.id
									? `${classes.faq_question} ${classes.active_question}`
									: classes.faq_question
								}
								onClick={() => switchAnswers(q.id)}
							>
								{q.question}
							</span>
							<div
								className={classes.faq_answer_wrapper}
								style={{ maxHeight: activeQuestion === q.id ? `${answerRef.current.scrollHeight}px` : '0' }}
							>
								<p
									className={classes.faq_answer}
									ref={answerRef}
								>
									{q.answer}
								</p>
							</div>
						</div>

					))}
				</div>
			</div>
		</div>
	)
};

export default AboutUsFAQLayout;