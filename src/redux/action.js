function add(text){
    return { type: 'add',text, }
}
function deleteItem(index){
    return { type: 'delete',index,}
}
export {add,   deleteItem };
