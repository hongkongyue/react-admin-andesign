export function todolist(state=[], action){
    switch(action.type){
        case 'add':
            return [...state, action.text];
        case 'delete':
             let arr = [...state]
                 arr.splice(action.index, 1); 
             return arr
        default:
            return state;
    }
}