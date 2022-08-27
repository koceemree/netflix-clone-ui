import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Title from './components/Title';
import Footer from './components/Footer/Footer';
import './App.css';
import './normalize.css'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
