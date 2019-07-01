import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import GlobalProvider from './GlobalProvider';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
<GlobalProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</GlobalProvider>, document.getElementById('root'))
