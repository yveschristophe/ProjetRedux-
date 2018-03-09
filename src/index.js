import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CartesProduits from './Components/CartesProduits';
import {Provider} from 'react-redux';
import Panier from './reducer/Panier';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Panier);

ReactDOM.render(
<Provider store={store}>
    <CartesProduits />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
