import { type FC, useState } from 'react';
import ErrorMessage  from '../../components/error-message/error-message'
import LoadButton  from '../../components/load-button/load-button'
import TextMessage  from '../../components/text-message/text-message'

interface AppProps {
    message: string
    error: string
  }

/*
    Главная страница
*/
const HomePage: FC = () => {
    const [state, setState] = useState<AppProps>({ message: '', error: ''})

    const loadMessage = () => {
        fetch('https://catfact.ninja/facts')
          .then((res) => res.json())
          .then(data => {
            setState({ message: JSON.stringify(data), error: ''})
          })
          .catch((err) => {
            setState({ message: '', error: err.message})
          });
    }

    return (
        <>
            <h2>Главная страница</h2>

            <TextMessage message={state.message}></TextMessage>
      <div>
        <LoadButton onClickHandle={loadMessage}>

        </LoadButton>
      </div>
      <ErrorMessage message={state.error}></ErrorMessage>
        </>
    )
}

export default HomePage;