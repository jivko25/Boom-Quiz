import Typography from '@mui/material/Typography'
import Countdown from 'react-countdown';



export default function HeaderTime({start_time}){

    const renderer = ({minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          // Redirect to finish page
        } else {
          // Render a countdown
          return (
            minutes >= 10 ?
                <Typography variant="h1" color="initial">{minutes}:{seconds}</Typography>
                :
                <Typography variant="h1" color="initial">0{minutes}:{seconds}</Typography>
          );
        }
      };

    return(
        <div>
            <Countdown
            date={Date.now() + start_time}
            intervalDelay={10}
            precision={1}
            renderer={renderer}/>
        </div>
    )
}