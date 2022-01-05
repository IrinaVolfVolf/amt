import React from 'react';
import styles from './Fullchatwindow.module.css';

const Fullchatwindow = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.FullChatWindowBackButton}>
                    <a href="/">Back</a>
                </div>
                <div className={styles.FullChatWindowTitle}>Chat</div>
                <div className={styles.FullChatWindowSelectorArea}>Chat Selector Buttons</div>
                <div className={styles.FullChatWindowMessagesArea}>Messages area</div>
                <div className={styles.FullChatWindowInputArea}>Input test area</div>
                <div className={styles.FullChatWindowSubmitButton}>S</div>
            </div>
        </>
    )
}

export default Fullchatwindow