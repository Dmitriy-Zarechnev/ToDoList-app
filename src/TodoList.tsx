import React from 'react'
import {filterValuesType} from './App'

export type TasksType = {
    id: number,
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (value: filterValuesType) => void
}

export const TodoList: React.FC<TodoListPropsType> = (props) => {
    return (
        <div className={'to_Do_List'}>
            <h3 className={'to_Do_List__header'}>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox"
                                   checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={() => {
                                props.removeTask(el.id)
                            }}>✖️
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All
                </button>

                <button onClick={() => {
                    props.changeFilter('active')
                }}>Active
                </button>

                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
}