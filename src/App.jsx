import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
// import './css/style-login.scss'
import "./img/test.scss";
import Button from './components/Button'
import {connect} from 'react-redux'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header login-warp">
        <img src={logo}  className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => props.getData()}>
            count is: {props.data}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <Button>点击开始</Button>
        </p>
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  getData: () => { dispatch({ type: 'FETCH_DATA' }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
