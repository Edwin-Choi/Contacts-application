import Contacts from './components/contacts/Contacts'
import Banner from './components/banner/Banner'
import './App.css';

function App() {

    return (
      
      <div className="App">
        <Banner />
        <header className="App-header">
          <p>
            <Contacts />
          </p>
        </header>
      </div>
    );
}

export default App;
