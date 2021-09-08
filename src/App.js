
import './App.css';
import Form from './components/Form'
import {useState} from 'react'

function App() {
   // return (<div className="App"><Form /></div>)

     const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

    return loading? (<div>
                Loading...
                <button onClick={()=>{
                        setLoading(false);
                        setError(true);
                    }}>
                    Loading Done
                </button>
            </div>) : error ? ( <div className="App">Something went wrong</div>
            ) : ( <div className="App">Here's your data</div>)

}

export default App;
