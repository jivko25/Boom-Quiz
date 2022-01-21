import { Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { CorrectAnswersContext, ExperienceContext, StartTimeContext, TaskContext } from '../../src/components/common/TaskProvider';
import FinalPoints from '../../src/components/finalPoints/FinalPoints';

export default function Index(){
    const [tasks] = useContext(TaskContext);
    const [finalCorrectAnswers, setFinalCorrectAnswers] = useContext(CorrectAnswersContext);
    const [startTime] = useContext(StartTimeContext);
    const [experience] = useContext(ExperienceContext);

    useEffect(async () => {
        const start = new Date(startTime);
        const end = new Date(Date.now());
      await axios.post(`${process.env.api}/classes/submits`, {
        "startTime" : start,
        "endTime" : end,
        "xp": experience,
        "correctAnswers": finalCorrectAnswers
    }, {headers : process.env.headers})
    }, []);
    
    return(
        <div>
            <FinalPoints tasks={tasks.length} finalCorrectAnswers={finalCorrectAnswers}/>
        </div>
    )
}