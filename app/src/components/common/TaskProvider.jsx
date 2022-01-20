import {createContext, useState} from "react";

export const TaskContext = createContext();
export const CorrectAnswersContext = createContext();
export const ExperienceContext = createContext();

export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);
    const [finalCorrectAnswers, setFinalCorrectAnswers] = useState(0);
    const [experience, setExperience] = useState(0);

    return(
        <TaskContext.Provider value={[tasks, setTasks]}>
            <CorrectAnswersContext.Provider value={[finalCorrectAnswers, setFinalCorrectAnswers]}>
                <ExperienceContext.Provider value={[experience, setExperience]}>
                    {children}
                </ExperienceContext.Provider>
            </CorrectAnswersContext.Provider>
        </TaskContext.Provider>
    )
    
}