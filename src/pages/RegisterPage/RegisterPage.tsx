import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { accountActions } from '../../store/account';


/*
    Страница регистрации
*/
const RegisterPage: React.FC = () => {
    const dispatcher = useDispatch()
    const emailField = useRef<HTMLInputElement>(null)
    const navigator = useNavigate()

    const handleSubmit = () => {
        dispatcher(accountActions.set(emailField.current?.value ?? ''))
        navigator('/')
    }

    return (
        <>
            <h2>Страница регистрации</h2>
            <Form>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Имя</label>
                    <input className="form-control" id="InputName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Адрес электронной почты</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" ref={emailField} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
                <Button itemType='submit' className="btn btn-primary" onClick={handleSubmit}>Отправить</Button>
            </Form>
        </>
    )
}

export default RegisterPage;