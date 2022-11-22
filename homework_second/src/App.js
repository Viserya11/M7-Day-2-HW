import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './Components/MyNav'
import MyFooter from './Components/MyFooter'
import MyJumbotron from './Components/MyJumbotron.jsx';
import Latest from './Components/Latest';

function App() {
  return (
    <div>
      
      <MyNav subtitle="Random text" />
      <MyJumbotron></MyJumbotron>
      <Latest></Latest>
      <MyFooter></MyFooter>
      
      
    </div>
  )
}


export default App;
