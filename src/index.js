import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';


//whithExtraArgument function permet de passer un autre argument a l'action 
//Homa had 2 {getFirebase, getFirestore}

// A STORE ENHACER IS A MIDDLEWARE
//A STORE CAN HAVE ONE OR MANY STORE ENHACERS BY USING COMPOSE
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),//redux binding for firestore *connect the project to the config
        //les attributs qu'on a ajoute d profile c pr retirer les infos d user
        reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile:'users', attachAuthIsReady : true})//redux binding for firebase *connect the project to the confi
    )
);

//Pour n'envoyer le resultat au dom qu'apres qu'on a charge authentification
//tat3raf rassek wach nadi ola la m authentifi 3ad at chouf ach at rendri
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
