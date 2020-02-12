import {
    createStore,
    combineReducers
} from 'redux';

const UPDATE_CONTACTS = 'UPDATE_CONTACTS'
const UPDATE_POSITIONS = 'UPDATE_POSITIONS'
const Is_FORM_VISIBLE = 'Is_FORM_VISIBLE'

function actionJobContact(contactName) {
    return {
        type: UPDATE_CONTACTS,
        payload: {
            contactName
        }
    }
}
function actionJobPosition(jobPosition) {
    return {
        type: UPDATE_POSITIONS,
        payload: {
            jobPosition
        }
    }
}
function actionIsFormVisible(status) {
    return {
        type: Is_FORM_VISIBLE,
        payload: {

            status,
        }
    }
}


const defaultJobContactState = { contacts: '' };
function contacts(state = defaultJobContactState, action) {
    console.log(action)
    const newState = { ...state };
    switch (action.type) {
        case UPDATE_CONTACTS:
            newState.contacts = action.payload.contactName;
            break;
        default:
            break;
    }
    return newState;
}
const defaultJobPositionState = ''
function positions(state = defaultJobPositionState, action) {
    const newState = { ...state };
    switch (action.type) {
        case UPDATE_POSITIONS:
            newState.positions = action.payload.jobPosition;
            break;
        default:
            break;
    }
    return newState;
}

const defaultIsFormVisibleState = 0
function formStatus(state = defaultIsFormVisibleState, action) {
    const newState = { ...state };
    switch (action.type) {
        case Is_FORM_VISIBLE:
            newState.formStatus = action.payload.status
            break;
        default:
            break;
    }
    return newState;
}
const rootReducer = combineReducers({
    contacts: contacts,
    positions: positions,
    formStatus: formStatus

})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.store = store;
window.actionJobContact = actionJobContact;
store.subscribe(() => {
    // just for debugging!
    console.table(store.getState());
});

store.dispatch(actionJobContact('eva@gmail.com'));
store.dispatch(actionJobPosition('web developer'));
store.dispatch(actionIsFormVisible('yes'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
