import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Accounting from './components/Body/BreadCrumb/Accounting';



function App() {
  return (
    <div className="Landing-Page">
      <Header/>
      <Accounting/>
      
    </div>
  );
}

export default App;
