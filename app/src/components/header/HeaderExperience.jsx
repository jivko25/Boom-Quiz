import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


export default function HeaderExperience({experience}){
    return(
        <div>
            <Grid container direction={"column"}>
              <Grid item>
                  <Typography variant="h1" color="initial">{experience}xp</Typography>
              </Grid>
              <Grid item>
                  <Typography variant="h5" color="initial" align='center'>TOTAL XP</Typography>
              </Grid>
            </Grid>
        </div>
    )
}