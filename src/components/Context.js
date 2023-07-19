import { createContext, useReducer, useContext } from "react";

 const ListContext = createContext([]);
 const TasksDispatchContext = createContext(null);

export function useLists() {
    return useContext(ListContext);
  }
  
export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

function taskReducer(state, action){
    switch(action.type){
        case "Add":
            return [...state, action.task];
        case "Delete":
            return state.filter((item) => (item.id!==action.id));
        case "Checkbox":
            return state.map((item) => {
                if(item.id === action.id){
                    item.status= action.status;
                }
                return item;
            });

        default:
            throw new Error();
    }
}

export function ListProvider({children}){
    const [list, dispatch] = useReducer(taskReducer, []);
    return (
        <ListContext.Provider value={list}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </ListContext.Provider>
    );

}