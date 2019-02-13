const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer (reducer reduxowy jest to funkcja, która przyjmuje dwa argumenty, pierwszy to aktualny state, 
// a drugi argument to akcja. zwraca jedną rzeczy czyli zaktualizowany state);

// (state = initialState, )

const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + 10
        }
    }
    return state;
};

// Store (przyjmuje w agrumęcie zwrócony przez reducer state)
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription

// funkcja w subskrypcji przyjmuje w argumencie funkcje, która się wykonuje kiedykolwiek state
// zostanie zaktualizowany (czyli wtedy gdy jakaś akcja zostanie przekazana do reducer)

// funkcja która przekazujemy do subscribe, nie przyjmuje żądnych argumentów, 
// ale w tej funkcji mozemy wykonac jakikolwiek kod JS, który chcemy wykonać na aktualizacji stanu.

store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// Dispatching Action - funkcja wysyłania przyjmuje jako argument akcje (action), powinien byc to obiekt javascript
// który zawiera własciwosc type: 
store.dispatch(
    {
        type: 'INC_COUNTER'
    }
);
store.dispatch(
    {
        type: 'ADD_COUNTER', 
        value: 10
    }
);

console.log(store.getState());
