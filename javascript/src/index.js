import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , BrowserRouter} from 'react-router-dom';
import AppWrapper from './AppWrapper';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppWrapper></AppWrapper>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
