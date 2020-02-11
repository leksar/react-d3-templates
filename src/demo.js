import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import BarChart from './components/bar-chart/';
import LineChart from './components/line-chart';
import './styles.css';

const App = () => {

    const [data, setData] = useState([]);

    const getRandomData = () => {
        let data = [];
        for (let i = 0; i < Math.floor(Math.random() * 500); i++) {
            data.push(Math.floor(Math.random() * 100));
        }
        console.log(data)
        setData(data);
    }

    return (
        <>
            <div>
                <button onClick={getRandomData}>Randomize</button>
            </div>
            <BarChart data={data} />
            <LineChart data={data} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));