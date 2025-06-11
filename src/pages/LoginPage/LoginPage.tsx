import { useRef, type FC } from 'react';
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { accountActions } from '../../store/account';
import { useNavigate } from 'react-router-dom';


/*
    Страница аутентификации
*/
const LoginPage: FC = () => {
    const dispatcher = useDispatch()
    const emailField = useRef<HTMLInputElement>(null)
    const navigator = useNavigate()

    const handleSubmit = () => {
        dispatcher(accountActions.set(emailField.current?.value ?? ''))
        navigator('/')
    }

    return (
        <>
            <h2>Страница аутентификации</h2>
            <Form>
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

export default LoginPage;