import { v1 } from 'uuid';
import { TodoListType } from '../App';
import { ADD_TODOLIST, AddTodolistAT, CHANGE_TODOLIST_TITLE, changeTodolistTitleAT, todolistReducer } from './todolist-reducer';
import { expect, test } from '@jest/globals';


test('Correct todolist should be removed', () => {

    // 1. Тестовые данные:
    const todoListID_1 = v1();
    const todoListID_2 = v1();

    const todoLists: Array<TodoListType> = [
        { id: todoListID_1, title: 'Tech List', filter: 'all' },
        { id: todoListID_2, title: 'Buy List', filter: 'all' }
    ]

    // 2. Вызов тестируемой функции:
    const newState = todolistReducer(todoLists, { type: 'DELETE-TODOLIST', todolistID: todoListID_2 })

    // 3. Проверка результата:
    expect(newState.length).toBe(todoLists.length - 1)
    expect(todoLists[0].id).toBe(todoListID_1)
})

test('Correct todolist should be added', () => {
    // 1. Тестовые данные:
    const todoListID_1 = v1();
    const todoListID_2 = v1();

    const todoLists: Array<TodoListType> = [
        { id: todoListID_1, title: 'Chocolate List', filter: 'completed' },
        { id: todoListID_2, title: 'Book List', filter: 'active' }
        // {id: newIdTodolist, title: 'Skills', filter: 'all'}
    ]
    // 2. Вызов тестируемой функции:
    const newIdTodolist = v1();
    const action: AddTodolistAT = {
        type: ADD_TODOLIST,
        newTitle: 'Skills',
        newTodolistID: newIdTodolist
    }
    const newState = todolistReducer(todoLists, action)

    // 3. Проверка результата:
    expect(newState.length).toBe(todoLists.length + 1)
    expect(newState[newState.length - 1].title).toBe('Skills')
    expect(newState[newState.length - 1].id).toBe(newIdTodolist)
    expect(newState[newState.length - 1].filter).toBe('all')
})

test('Correct title of the todolist should be changed', () => {
    // 1. Тестовые данные:
    const todoListID_1 = v1();
    const todoListID_2 = v1();

    const todoLists: Array<TodoListType> = [
        { id: todoListID_1, title: 'Chocolate List', filter: 'completed' },
        { id: todoListID_2, title: 'Book List', filter: 'active' }
    ]
    // 2. Вызов тестируемой функции:

    const action: changeTodolistTitleAT = {
        type: CHANGE_TODOLIST_TITLE,
        title: 'Ice-Cream List',
        todolistID: todoListID_1
    }

    const newState = todolistReducer(todoLists, action)

    // 3. Проверка результата:
    expect(newState.length).toBe(2);
    expect(newState[0].title).toBe('Ice-Cream List')
    expect(newState[0].filter).toBe('completed')
    expect(newState[0].id).toBe(todoListID_1)
})

// TDD - Test Driven Development


