import React from 'react';
import styles from './MainUserPageFooter.module.css';
import task_list from '../../../components/img/taskList.png';
import tools from '../../../components/img/tools.png';
import mailBox from '../../../components/img/mailBox.png';
import team from '../../../components/img/team.png';
import userInfo from '../../../components/img/userInfo.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.castle}>
                    <p><NavLink to="/"><img src="none"></img></NavLink></p>
                </div>
                <div className={styles.chat}>
                    <div className={styles.chat_text}>
                        <NavLink to="/fullchatwindow">Tap to chat</NavLink>
                    </div>
                </div>
                <div className={styles.inventory}>
                    <img src={task_list} alt="task_list" className={styles.task_list}/>
                    <img src={tools} alt="tools" id={tools} className={styles.task_list}/>
                    <img src={mailBox} alt="mailBox" className={styles.task_list}/>
                    <img src={team} alt="team" className={styles.task_list}/>
                    <img src={userInfo} alt="userInfo" className={styles.task_list}/>
                </div>
            </div>
        </>
    )
}

export default Footer
