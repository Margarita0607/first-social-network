import reportWebVitals from './reportWebVitals';
import store from './components/redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {addPost, updateNewPostText} from './components/redux/state';
// import { BrowserRouter } from 'react-router-dom';
//  

// {/* <script src="http://localhost:8097"></script> */}
let rerenderEntireTree = (state) => { 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state} 
        dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>, 
)
};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


reportWebVitals();
