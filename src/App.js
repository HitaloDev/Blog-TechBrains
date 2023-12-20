import Header from './components/Header';
import Hero from './components/Hero';
import Posts from './components/Posts';
import Visited from './components/More_Visited';
import styles from '../src/style/styles.css';
import MoreVisited from './components/More_Visited';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Posts />
      <MoreVisited />
    </>
  );
}

export default App;
