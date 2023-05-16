import './App.css';
import { Pages } from './pages/routes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
        <Sidebar/>
        <Pages/>
    </div>
  );
}

export default App;
