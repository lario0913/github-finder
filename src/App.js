import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './component/layout/Navbar';
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
