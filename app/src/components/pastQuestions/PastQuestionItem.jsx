import styles from './PastQuestionItem.module.scss';
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import {motion} from 'framer-motion';


export default function PastQuestionItem({question}){
    if(question)
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity : 0.2}} transition={{duration: 3}} className={styles.wrapper}>
            <Grid container direction={'row'} justifyContent={'space-between'}>
              <Grid item>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <Typography variant="h4" color="initial">{question.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="primary">+{question.xp}</Typography>
                        </Grid>
                    </Grid>
              </Grid>
              <Grid item>
                  <div className={styles.success}>
                      <DoneIcon color='secondary'/>
                  </div>
              </Grid>
            </Grid>
        </motion.div>
    )
    else{
        return <div></div>
    }
}