import React from 'react';
import styles from './MainUserPageHeader.module.css';
import user from "../../../components/img/user.png";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={user} alt="logo" className={styles.user_img}/>
                </div>
                <div className={styles.stamina}>Your score: 0</div>
                <div className={styles.meat}>One</div>
                <div className={styles.wood}>Day</div>
                <div className={styles.stone}>One</div>
                <div className={styles.steel}>Pay</div>
                <div className={styles.power}>7</div>
                <div className={styles.empty}>8</div>
                <div className={styles.diamonds}>9</div>
                <div className={styles.vip}></div>
            </header>
        </>
    )
}

export default Header
