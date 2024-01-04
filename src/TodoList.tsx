import React from 'react'

export type TasksType = {
    id: number,
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
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
                        <li key={el.id}><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}