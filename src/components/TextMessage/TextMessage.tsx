import { type FC } from 'react';

export interface TextMessageProps {
    message: string;
}

/*
    Компонент отображения текстового сообщения
*/
const TextMessage: FC<TextMessageProps> = ({message}) => {
    return (
        <textarea className='form-control' value={message} readOnly />
    )
}

export default TextMessage;