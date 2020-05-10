// redux is independent of react. it is a stand alone library.
const redux = require('redux');
const createStore = redux.createStore;
const initState = {
    count: 0
};

//Reducer 
const rootReducer = (state = initState, action) => {
        if(action.type === 'INC_COUNTER'){
            return {
                ...state,
                count: state.count + 1
            }
        }
        if(action.type === 'ADD_COUNTER'){
            return {
                ...state,
                count: state.count + action.value
            }
        }   
        
        return state;
    };

//Store
const store = createStore(rootReducer);

//subscription
store.subscribe(()=>{
    console.log('Subscription',store.getState());
});

//Dispatcher Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({ type: 'ADD_COUNTER', value: 10 });


