import { type FC } from 'react';
import './load-button.css';

export interface LoadButtonProps {
    onClickHandle: () => void
}

/*
    Кнопка загрузки
*/
const LoadButton: FC<LoadButtonProps> = (props) => {
    return (
        <button
            className='load-button'
            type='button'
            onClick={props.onClickHandle}
            >
            Загрузить
        </button>
    )
}

export default LoadButton;