import {useState} from 'react'
function App() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

    // if(loading)
    // {
    //     return (
    //         <div>
    //             Loading...
    //             <button onClick={()=>{
    //                     setLoading(false);
    //                     setError(false);
    //                 }}>
    //                 Loading Done
    //             </button>
    //         </div>
    //     );
    // }
    // if(error)
    // {
    //      return <div className="App">Something went wrong</div>
    // }
    // return <div className="App">Here's your data : 1234</div>

    //Better:

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
