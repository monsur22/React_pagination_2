import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Post from './components/Post';


function App() {
  return (
    <div className="App">
      <div className="App-header">

    <Router>

      <Route path="/" component={Post} exact></Route>

    </Router>

    </div>
    </div>
  );
}

export default App;
