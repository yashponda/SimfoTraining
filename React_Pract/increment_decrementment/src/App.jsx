import React, { useState } from 'react';

const App = () =>{

    const state = useState();
    const [count, setCount] = useState(0);

    const incNumber = () => {
        setCount(count+1);
    };
    const dicNumber = () => {
        setCount(count-1);
            if(count>0){
                setCount(count-1);
            }else{
                setCount(0);
                alert('you are reaching the limit');
            }
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{count}</h1>
                    <div className="btn_div">
                            <button onClick={incNumber} className="btn1"> Increment </button>
                            <button onClick={dicNumber} className="btn2"> Decrement </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;