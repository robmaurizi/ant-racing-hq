import React, {useState} from 'react';

import './LoginScreen.scss';

const LoginScreen = ({ setLogin }) => {

    const [ loginError, setLoginError ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const onLoginSubmit = (e) => {
        e.preventDefault();

        if (( username === 'sneakerguy' ) && ( password === 'jordan' )) {
            setLogin(true);
            setLoginError('');
        } else {
            setLogin(false);
            setLoginError('Your username or password is incorrect');
        }
    }
    
    const onFieldChange = (el) => {
        const val = el.target.value;
        switch (el.target.name ) {
            case 'username':
                setUsername(val);
                break;
            case 'password':
                setPassword(val);
                break;
            default:
                break;
        };
    }

    return (
        <div className="login-screen">
            <header><h1>Racing Ants HQ</h1></header>

            <form method="POST" onSubmit={ (el, user, pass) => { onLoginSubmit(el, user, pass); } }>

                <label htmlFor="username">User Name
                    <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={onFieldChange} />
                </label>

                <label htmlFor="password">Password
                    <input type="password" name="password" id="password" value={password} onChange={onFieldChange} />
                </label>

                <button type="submit">Log In</button>

                { loginError !== '' ? <div className="login-error">{ loginError }</div> : null }

            </form>
        </div>

    );

};
export default LoginScreen;