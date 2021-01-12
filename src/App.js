import General from './Components/General.js'
import Education from './Components/Education.js'
import Experience from './Components/Experience.js'
import Header from './Components/Header.js'
import './styles.css';

function App() {
  return (
    <div className="app">
          <Header />
          <General />
          <Education />
          <Experience />
    </div>
  );
}

export default App;
