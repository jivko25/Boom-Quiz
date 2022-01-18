import HeaderExperience from "./HeaderExperience";
import HeaderQuestions from "./HeaderQuestions";
import HeaderTime from "./HeaderTime";
import Grid from '@mui/material/Grid'
import { Container } from "@mui/material";


export default function Header({questions, currentQuestion, start_time, experience}){
    return(
        <div>
            <Container>
                <Grid container justifyContent={"space-between"}>
                    <Grid item>
                        <HeaderQuestions questions={questions} currentQuestion={currentQuestion}/>
                    </Grid>
                    <Grid item>
                        <HeaderTime start_time={start_time}/>
                    </Grid>
                    <Grid item>
                        <HeaderExperience experience={experience}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}