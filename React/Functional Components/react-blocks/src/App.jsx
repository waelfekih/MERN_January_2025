import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import SubContent from './components/SubContent';
import Advertissment from './components/Advertissment';
 
function App() {
  return (
    <div className="root">
        <Header />
        <Navigation />
        <MainContent />
          <SubContent />
          <Advertissment />
    </div>
  );
}
                
export default App;              


