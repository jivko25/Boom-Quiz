import { Container, Grid, Typography, TextField} from "@mui/material";
import styles from './Question.module.scss';
import { useContext, useState } from "react";
import { CorrectAnswersContext, ExperienceContext} from "../common/TaskProvider";
import {motion} from 'framer-motion'


export default function Question({question, onNextQuestion, onAddExperience, onCorrect}){
    const [answer, setAnswer] = useState('');
    const [finalCorrectAnswers, setFinalCorrectAnswers] = useContext(CorrectAnswersContext);
    const [experience, setExperience] = useContext(ExperienceContext);
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
                setExperience(experience + question.xp)
                setIsOpen(true);
                setTimeout(() => {
                onNextQuestion()
                    setIsOpen(false)
                }, 1000);
                setAnswer('');
            }
        }
     }
    return(
            <motion.div
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
                    <Grid item className={styles.content}>
                        <img src={question?.content}/>
                    </Grid>
                    <Grid item xs={10}>
                    <TextField
                        color="primary"
                        variant='outlined'
                        value={answer}
                        onChange={(e) => {setAnswer(e.target.value)}}
                        onKeyDown={keyPress}
                        className={styles.input}
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