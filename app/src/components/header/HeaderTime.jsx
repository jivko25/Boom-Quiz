import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Countdown from 'react-countdown';




export default function HeaderTime({start_time}){
    const [time, setTime] = useState(start_time);
    const router = useRouter();

    const renderer = ({minutes, seconds, completed }) => {
        if (completed) {
          router.push('/final')
          return <h1>Time end</h1>
          // Render a complete state
          // Redirect to finish page
        } else {
          // Render a countdown
          return (
            minutes >= 10 ?
                seconds >= 10 ?
                <Typography variant="h1" color="white">{minutes}:{seconds}</Typography>
                :
                <Typography variant="h1" color="white">{minutes}:0{seconds}</Typography>
                :
                seconds >= 10 ?
                <Typography variant="h1" color="white">0{minutes}:{seconds}</Typography>
                :
                <Typography variant="h1" color="white">0{minutes}:0{seconds}</Typography>
          );
        }
      };

    return(
        <div>
            <Grid container direction={"column"}>
              <Grid item>
                <Countdown
                date={time + 600000}
                intervalDelay={10}
                precision={1}
                renderer={renderer}/>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="white" align='center'>TIME REMAINING</Typography>
              </Grid>
            </Grid>
        </div>
    )
}