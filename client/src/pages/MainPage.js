import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const MainPage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }

    return (
        <>
        <div className="header_wrapper">
            <div className="header_logo">Logo</div>
            <div className="header_menu">Menu</div>
        </div>
        <div className="body_wrapper">
            <div className="body_left">Logo</div>
            <div className="body_center"></div>
            <div className="body_right">
                <div className="input-field">
                    <input
                        placeholder="Input email"
                        id="email"
                        type="text"
                        name= "email"
                        className="validate"
                        onChange={changeHandler}>
                    </input>
{/*                    <label className="active" htmlFor="email">Email</label>*/}
                </div>
                <div className="input-field">
                    <input
                        placeholder="Input password"
                        id="password"
                        type="password"
                        name= "password"
                        className="validate"
                        onChange={changeHandler}>
                    </input>
{/*                    <label className="active" htmlFor="password">Password</label>*/}
                    <div align="center" style={{marginTop: 15}}>
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}
                            disabled={loading}
                        >
                            LogIn
                        </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            SignIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_wrapper">
{/*            <div className="footer_left">Logo</div>*/}
            <div className="footer_right"><a href="/aboutsystempage">about</a></div>
        </div>
        </>
    )
}