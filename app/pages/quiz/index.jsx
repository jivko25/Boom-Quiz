import { useContext, useEffect, useRef, useState } from 'react'
import {StartTimeContext, TaskContext } from '../../src/components/common/TaskProvider'
import Header from '../../src/components/header/Header';
import Question from '../../src/components/question/Question';
import beautify from 'simply-beautiful'
import { useRouter } from 'next/router';
import PastQuestionItem from '../../src/components/pastQuestions/PastQuestionItem';

export default function Home() {
  const [tasks, setTasks] = useContext(TaskContext);
  const [experience, setExperience] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [startTime, setStartTime] = useContext(StartTimeContext);

  const router = useRouter();
  const firstRender = useRef(true);

  const onNextQuestion = () => {
    if(questionIndex + 1 >= tasks.length){
      router.push('/final')
    }
    else{
      setQuestionIndex(questionIndex + 1)
      setCurrentQuestion(tasks[questionIndex])
    }
  }

  useEffect(() => {
    setCurrentQuestion(tasks[questionIndex])
    if(firstRender.current){
      firstRender.current = false;
      setStartTime(Date.now());
    }
  }, [questionIndex])


  return (
    <div>
      <Header questions={tasks} currentQuestion={questionIndex + 1} experience={experience} start_time={Date.now()}/>
      <PastQuestionItem question={tasks[questionIndex-1]}/>
      <Question question={currentQuestion} onNextQuestion={onNextQuestion} onAddExperience={(xp) => setExperience(experience + xp)} index={questionIndex}/>
    </div>
  )
}
