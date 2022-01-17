import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { TaskContext } from '../src/components/common/TaskProvider'
import Header from '../src/components/header/Header';

export default function Home() {
  const [tasks] = useContext(TaskContext);
  const [experience, setExperience] = useState(0);

  const questions=['task1', 'task2', 'task3']
  console.log(Date.now().iso);

  return (
    <div >
      <Header questions={questions.length} currentQuestion={1} experience={experience} start_time={600000}/>
    </div>
  )
}
