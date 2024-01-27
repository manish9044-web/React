/* eslint-disable no-unreachable */
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.css';

function App() {

  return <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
      </div>
  
}

export default App
