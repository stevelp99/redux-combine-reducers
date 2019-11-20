import {ADD_TODO,DELETE_TODO,TOGGLE_TODO_STATE} from "../actionTypes/todoActionTypes";
import {TodoItem} from "../classes/todoClasses";
const initialState=[
    {
        id:0,
        text:"sample task",
        isCompleted:false,
        createdAt: new Date()
    }
]
//Individual todo item
//{
//id: 1,
//text: this is text,
//isCompleted:false,
//createdAt: DATE
//}

function generateId(tasks){
    if (tasks.length<1)return 0;
    const taskIds=tasks.map(task=>task.id);
    const highestId=Math.max.apply(Math,taskIds);
    return highestId+1;
}

export function todoReducer(state=initialState,action){
    switch (action.type){
        case ADD_TODO:
            return state.concat([new TodoItem(action.text,generateId(state))]);
        case DELETE_TODO:
            return state.filter(task=>task.id!==action.id);
        case TOGGLE_TODO_STATE:
            return state.map(task=>{
                if (task.id===action.id){
                    return{
                        ...task,
                        isCompleted:!task.isCompleted
                    }
                }else{
                    return task;
                }
            });
        default:
            return state
    }
}