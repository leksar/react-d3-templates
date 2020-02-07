import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './components/bar-chart/';
import LineChart from './components/line-chart';
import './styles.css';

const App = () => {
    return (
        <>
            <BarChart data={[18, 21, 16, 22, 5, 7, 12, 20]} />
            <LineChart data={[18, 21, 16, 22, 5, 7, 12, 20]} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));