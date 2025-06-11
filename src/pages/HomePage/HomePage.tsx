import { type FC, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/errorMessage'
import LoadButton from '../../components/LoadButton/loadButton'
import TextMessage from '../../components/TextMessage/TextMessage'

interface AppProps {
  message: string
  error: string
}

/*
    Главная страница
*/
const HomePage: FC = () => {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<AppProps>({ message: '', error: '' })

  const loadMessage = () => {
    setLoading(true)

    fetch('https://catfact.ninja/facts')
      .then((res) => res.json())
      .then(data => {
        setState({ message: JSON.stringify(data), error: '' })
      })
      .catch((err) => {
        setState({ message: '', error: err.message })
      })
      .then(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="card col-5">
        <h5 className="card-header">Загрузка</h5>
        <div className="card-body">
          {!loading ?
            <>
              <h5 className="card-title">https://catfact.ninja/facts</h5>
              <p className="card-text"></p>
              <TextMessage message={state.message}></TextMessage>
              <ErrorMessage message={state.error}></ErrorMessage>
              <LoadButton onClickHandle={loadMessage}></LoadButton>
            </> :
            <>
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <a className="btn btn-primary disabled placeholder col-6"></a>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default HomePage;