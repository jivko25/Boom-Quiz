import { Typography } from '@mui/material';
import { useContext } from 'react';
import { CorrectAnswersContext, TaskContext } from '../../src/components/common/TaskProvider';
import FinalPoints from '../../src/components/finalPoints/FinalPoints';

export default function Index(){
    const [tasks] = useContext(TaskContext);
    const [finalCorrectAnswers, setFinalCorrectAnswers] = useContext(CorrectAnswersContext);
    return(
        <div>
            <FinalPoints tasks={tasks.length} finalCorrectAnswers={finalCorrectAnswers}/>
        </div>
    )
}