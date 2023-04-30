import { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className='wrapper'>
            <h1>Click Counter</h1>
            <Counter></Counter>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button className='counter' onClick={ () => setCount(count + 1) }>You clicked {count} times.</button>
            <button className='reset' onClick={ () => setCount(0) }>Reset</button>
        </>
    );
}

export default App;
