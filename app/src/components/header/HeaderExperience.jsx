import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { useEffect } from 'react';


export default function HeaderExperience({experience}){
    const [exp, setExp] = useState(experience);
    const [xp, setXp] = useState(0);

    (function(){
        if(exp != experience){
            setExp(experience)
        }
    })();

    useEffect(() => {
        for(let i = xp; i <= exp; i++){
            setTimeout(() => {
                setXp(i)
            }, 100);
        }
    }, [exp])
    return(
        <div>
            <Grid container direction={"column"}>
              <Grid item>
                  <Typography variant="h1" color="white">{xp}xp</Typography>
              </Grid>
              <Grid item>
                  <Typography variant="h5" color="white" align='center'>TOTAL XP</Typography>
              </Grid>
            </Grid>
        </div>
    )
}