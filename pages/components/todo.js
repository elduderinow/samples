import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { createTodo, removeTodo, completeTodo } from "../helpers/redux/actions"



const Todo = ({ todos, onCreatePressed, onRemovePressed, onCompletePressed }) => {
    const [input, setInput] = useState('')

    return (
        <section className="header panel">
            <div className="grid grid-cols-12 p-5">
                <div className="col-span-6">
                    <form>
                        <label htmlFor="fname">todo item</label><br />
                        <input onChange={(e) => {
                            setInput(e.target.value)
                        }}
                            className="bg-gray-200" type="text" id="fname" name="fname" /><br /><br />
                        <input onClick={(e) => {
                            e.preventDefault()
                            const isDuplicate =
                                todos.some(todo => todo.text === input)
                            const isEmpty = input !== ''
                            if (!isDuplicate && isEmpty) {
                                onCreatePressed(input)
                                setInput('')
                            }
                        }}
                            className="bg-green-400" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-span-6">
                    <h1>Todo list</h1>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                <span onClick={()=> {
                                    onCompletePressed(todo.text)
                                }} className="marker">V</span>

                                <span className="delete" onClick={() => {
                                    onRemovePressed(todo.text)
                                }}>X</span>

                                <span className={todo.isCompleted ? 'completed' : 'incomplete'}>{todo.text}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})
const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: text => dispatch(createTodo(text)),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(Todo)