import store from './store'
import {bugAdded, bugRemoved, bugResolved} from './actions'

const unsub = store.subscribe(()=>{
	console.log('store changed! ', store.getState())
})

store.dispatch(bugAdded('bug 1'))
store.dispatch(bugAdded('bug 2'))

//unsub()
//store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(2))

console.log(store.getState())
