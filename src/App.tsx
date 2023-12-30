import React from 'react'
import './App.css'
import {TodoList} from './TodoList'


function App() {

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ]

    const tasks2 = [
        {id: 1, title: 'SC2', isDone: true},
        {id: 2, title: 'APEX', isDone: false},
        {id: 3, title: 'BG3', isDone: false}
    ]

    const tasks3 = [
        {id: 1, title: 'Dark Tower', isDone: true},
        {id: 2, title: 'Game og Thrones', isDone: false},
        {id: 3, title: 'Witcher', isDone: true}
    ]


    return (
        <div className="App">
            <TodoList title={'What to learn'} tasks={tasks1}/>
            <TodoList title={'Streams'} tasks={tasks2}/>
            <TodoList title={'Books'} tasks={tasks3}/>
        </div>
    )
}


export default App
