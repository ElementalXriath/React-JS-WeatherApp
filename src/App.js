import React, {useState} from 'react';


const App = () => {

const [count, SetCount] = useState(10);

  return (
    <div className="App">
    <button onClick={() => SetCount(currentCount => currentCount + 1)}></button>
    <div>{count}</div>
    </div>
  );
}

export default App;
