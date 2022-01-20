import styles from './FinalPoints.module.scss';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useContext } from 'react';
import { CorrectAnswersContext, TaskContext } from '../common/TaskProvider';



export default function FinalPoints({tasks, finalCorrectAnswers}){
    return(
            <div className={styles.wrapper}>
              <Grid container spacing={1} direction={'column'}>
                <Grid item>
                  <Typography variant="h1" color="secondary" align='center'>GREAT JOB</Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={1} direction={'column'} className={styles.info}>
                    <Grid item>
                      <Typography variant="h1" color="primary" align='center'>{finalCorrectAnswers}/{tasks}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3" color="primary" align='center'>QUESTIONS ANSWER CORRECTLY</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
    )
}