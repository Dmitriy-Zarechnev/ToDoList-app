import React, {useState} from 'react'
import './App.css'
import {TodoList} from './TodoList'

export type filterValuesType = 'all' | 'active' | 'completed'


function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphL', isDone: false}
    ])

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<filterValuesType>('all')

    let tasksForToDoList = tasks

    if (filter === 'active') {
        tasksForToDoList = tasks.filter((task) => !task.isDone)
    }

    if (filter === 'completed') {
        tasksForToDoList = tasks.filter((task) => task.isDone)
    }

    function changeFilter(value: filterValuesType) {
        setFilter(value)
    }


    return (
        <div className="App">
            <TodoList title={'What to learn'} tasks={tasksForToDoList} removeTask={removeTask} changeFilter={changeFilter}/>

        </div>
    )
}


export default App
