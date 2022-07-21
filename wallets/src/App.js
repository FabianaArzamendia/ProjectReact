
import './App.css';
import Mybar from './componentes/Mybar';
import AddUser from './componentes/AddUser';
import AddWallet from './componentes/AddWallet';
import BasicPagination from './componentes/BasicPagination';

function App() {
  return (
    <div className="App">
     
        <Mybar/>  
        <AddUser/>          
        <p>...</p>
        <AddWallet/>
        <BasicPagination/>
    </div>
  );
}

export default App;
