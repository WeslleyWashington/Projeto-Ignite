// import {Post} from './Post';
import { Header } from './components/header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>


        </main>
      </div>
    </div> 
    
    
  )
}




