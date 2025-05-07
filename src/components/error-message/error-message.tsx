import { type FC } from 'react';
import './error-message.css';

export interface ErrorMessageProps {
    message: string;
}

/*
    Компонент отображения ошибки
*/
const ErrortMessage: FC<ErrorMessageProps> = ({message}) => {
    return (
        <>
            {(message !== '') &&
                <div className='error-message'>
                    {message}
                </div>
            }
        </>
    )
}

export default ErrortMessage;