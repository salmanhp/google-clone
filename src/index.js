import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './global.css';

import { ResultContextProvider } from './contexts/ResultContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <ResultContextProvider>
            <Router>
                <App />
            </Router>
        </ResultContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

