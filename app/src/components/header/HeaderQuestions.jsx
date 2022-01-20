import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


export default function HeaderQuestions({questions, currentQuestion}){
    return (
        <div>
            <Grid container direction='column' justifyContent={"center"}>
                <Grid item>
                    <Typography variant="h1" color="white">{currentQuestion}/{questions.length}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="h5" color="white" align='center'>QUESTIONS</Typography>
                </Grid>
            </Grid>
        </div>
    )
}