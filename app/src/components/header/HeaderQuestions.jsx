import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


export default function HeaderQuestions({questions, currentQuestion}){
    return (
        <div>
            <Grid container direction='column' justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h1" color="initial">{currentQuestion}/{questions}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="h5" color="initial" align='center'>QUESTIONS</Typography>
                </Grid>
            </Grid>
        </div>
    )
}