import { type FC } from 'react';
import './text-message.css';

export interface TextMessageProps {
    message: string;
}

/*
    Компонент отображения текстового сообщения
*/
const TextMessage: FC<TextMessageProps> = ({message}) => {
    return (
        <div className='text-message'>
            {message}
        </div>
    )
}

export default TextMessage;