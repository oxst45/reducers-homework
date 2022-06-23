import { TodoListType } from '../App';


export const DELETED_TODOLIST = 'DELETE-TODOLIST'
export const ADD_TODOLIST = 'ADD-TODOLIST'
export const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE'


export type ActionType = DeleteTodolistAT | AddTodolistAT | changeTodolistTitleAT


export type DeleteTodolistAT = {
    type: typeof DELETED_TODOLIST // type: 'DELETE-TODOLIST'
    todolistID: string
}
export type AddTodolistAT = {
    type: typeof ADD_TODOLIST
    newTitle: string
    newTodolistID: string
}
export type changeTodolistTitleAT = {
    type: typeof CHANGE_TODOLIST_TITLE
    title: string
    todolistID: string
}


export const todolistReducer = (todolists: Array<TodoListType>, action: ActionType): Array<TodoListType> => {

    if (action.type === DELETED_TODOLIST) {
        return todolists.filter((tl) => tl.id !== action.todolistID)

    } else if (action.type === ADD_TODOLIST) {
        return (
            [
                ...todolists,
                {
                    id: action.newTodolistID,
                    title: action.newTitle,
                    filter: 'all'
                }
            ]
        )
    } else if (action.type === CHANGE_TODOLIST_TITLE) {
        return (
            todolists.map((tl) => tl.id === todolistID ? { ...tl, title } : tl
            )
        )
    }

    // Домашнее задание: Наладить !!!вебШторм!!!

    // Реализовать CHANGE-TITLE и удовлетворить тесты

    // TDD: unit test + changeTodolistTitle

    return todolists;
}