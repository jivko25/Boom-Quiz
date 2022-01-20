import Button from '@mui/material/Button';
import styles from './home.module.scss';
import {useRouter} from 'next/router';
import Link from 'next/link';
import { TaskContext } from '../src/components/common/TaskProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion"


export default function Index(){
    const [tasks, setTasks] = useContext(TaskContext);

    useEffect(async () => {
        const res = await axios.get(`${process.env.api}/classes/questions`, {headers: process.env.headers});
        setTasks(res.data.results);
    }, [])
    return(
        <div className={styles.wrapper}>
            <Link href='/quiz'>
            <motion.div
                        className="container"
                        whileHover={{ scale: 1.2}}
                    >
                <Button variant="contained" color="secondary" className={styles.start}>
                START
                </Button>
            </motion.div>
            </Link>
        </div>
    )
}