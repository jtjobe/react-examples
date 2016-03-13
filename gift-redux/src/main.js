// ESLint can't detect when a variable is only used in JSX.
/* eslint no-unused-vars: 0 */

// Unique imports for this app
import GiftApp from './gift-app';
import reducer from './reducer';

// Styling
import 'bootstrap-loader';
import './app.scss';

// Common imports for every app
import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// This Object defines all the event handling callback functions
// used by the components in this app.
const callbacks = {
  onAddGift() {
    dispatch('addGift');
  },
  onAddName() {
    dispatch('addName');
  },
  onChangeGift(event) {
    dispatch('changeGift', event.target.value);
  },
  onChangeName(event) {
    dispatch('changeName', event.target.value);
  },
  onCloseConfirmDeleteModal() {
    dispatch('closeConfirmDeleteModal');
  },
  onConfirmDeleteName() {
    dispatch('confirmDeleteName');
  },
  onDeleteGift() {
    dispatch('deleteGift');
  },
  onDeleteName() {
    dispatch('deleteSelectedName');
  },
  onSelectGift(event) {
    dispatch('selectGift', event.target.value);
  },
  onSelectName(event) {
    dispatch('selectName', event.target.value);
  }
};

function render() {
  // A lot of functions are being passed to GiftApp.
  // This could be avoided by combining main.js and gift-app.js.
  // However, spliting them made it much easier to write
  // test/gift-app.spec.js.
  ReactDOM.render(
    <GiftApp callbacks={callbacks} store={store}/>,
    document.getElementById('content'));
}

// Everything after this would be the same in every app.

function dispatch(type, payload) {
  store.dispatch({type, payload});
}

const store = createStore(reducer);
store.subscribe(render);
render();