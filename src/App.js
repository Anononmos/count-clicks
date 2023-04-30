import { useState } from 'react';
import './App.css';

function App() {
    return (
        <>
            <h1>Click Counter</h1>
            <Counter i={0}></Counter>
        </>
    );
}

function Counter(i = 0) {
    const [count, setCount] = useState(i);

    return (
        <button className='counter'>You clicked {count} times.</button>
    );
}

export default App;
