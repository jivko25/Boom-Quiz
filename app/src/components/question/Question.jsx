import { Container, Grid, Typography, InputBase, Input, InputAdornment, TextField} from "@mui/material";
import styles from './Question.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from "react";
import { CorrectAnswersContext, TaskContext } from "../common/TaskProvider";
import {motion} from 'framer-motion'


export default function Question({question, onNextQuestion, onAddExperience, onCorrect}){
    const [answer, setAnswer] = useState('');
    const [finalCorrectAnswers, setFinalCorrectAnswers] = useContext(CorrectAnswersContext);
    const [isOpen, setIsOpen] = useState(false);

    const animations = {
        start : {
            y:0, 
            opacity:1
        },
        end : {
            y: -250,
            opacity:0
        },
        wrong : {
            rotate: [0, 0, 10, 10, -10, -10,10, 10, -10, -10,10, 10, -10, -10,10, 10, -10, -10, 0]
        }
    }

    function keyPress(e){
        if(e.keyCode == 13){
            if(answer == question.answer){
                setFinalCorrectAnswers(finalCorrectAnswers + 1)
                onAddExperience(question.xp)
                setIsOpen(true);
                setTimeout(() => {
                onNextQuestion()
                    setIsOpen(false)
                }, 1000);
            }
        }
     }
     console.log('refresh');
    return(
            <motion.div
                        className="container"
                        initial={{y:250, opacity:0}}
                        animate={!isOpen ? animations.start : animations.end}
                        exit={animations.end}
                        transition={{duration:1}}
                        className={styles["question-wrapper"]}>
            <Container>
                <Grid container direction={'column'} spacing={2}>
                    <Grid item>
                        <Grid container direction={'column'}>
                            <Grid item>
                                <Typography variant="h3" color="initial">{question?.title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" color="primary">+{question?.xp}xp</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <img src={question?.content}/>
                    </Grid>
                    <Grid item>
                    <TextField
                        color="primary"
                        variant='outlined'
                        value={answer}
                        onChange={(e) => {setAnswer(e.target.value)}}
                        onKeyDown={keyPress}
                        InputProps={{
                        endAdornment: (
                            <Typography variant="p" color="primary" style={{whiteSpace: 'nowrap'}}><span style={{fontSize : '20px'}}>&#8629;</span> PRESS ENTER TO SUBMIT</Typography>
                        ),
                        }}
                        fullWidth
                    />
                    </Grid>
                </Grid>
            </Container>
            </motion.div>
    )
}