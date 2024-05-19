import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortByNameUp = (state:UserType[]) => state.sort((a, b) => a.name.localeCompare(b.name))
            const sortByNameDown = (state:UserType[]) => state.sort((a, b) => b.name.localeCompare(a.name))
            let newState =[...state]
            if(action.payload==="up"){
                return sortByNameUp(newState)
            }
            else {
                return sortByNameDown(newState)
            }
             // need to fix
        }
        case 'check': {

            let newState = state.filter(u=>u.age>=action.payload);
            return newState // need to fix
        }
        default:
            return state
    }
}
