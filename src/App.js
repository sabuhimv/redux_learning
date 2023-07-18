import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/countSlice';
import CounterCard from './component/CounterCard';
import OtherCounter from './component/OtherCounter';
import { getCountry } from './redux/features/country/countrySlice';
import Header from './component/Header';
import Footer from './component/Footer';
import { setLanguage, setDarkMode } from './redux/features/ThemeAndLang/site';
import { routes } from './routes'
import { Routes } from 'react-router-dom';
// import Switch from "react-switch";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { addTodo, removeTodo } from './redux/features/TodoList/todoList';


function App() {

  const dispatch = useDispatch()

  const { counter } = useSelector(state => state.counter)
  const { country } = useSelector(state => state.country)


  const { todos } = useSelector(state => state.todos)
  const [todoText, setTodoText] = useState('');


  const { dark, language } = useSelector(state => state.site)
  const languages = ['tr', 'en']

  const handleLang = (lang) => {
    dispatch(setLanguage(lang))
  }

  // console.log(country)

  // useEffect(()=>{
  //   dispatch(getCountry())
  // },[])


  return (
    <div className={dark ? 'dark' : 'light'}>

      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />

        <button disabled={!todoText} onClick={() => dispatch(addTodo({ id: Date.now(), text: todoText }))}>Add Element</button>

        {/* {console.log(todos.id)} */}

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}

              <span onClick={() => dispatch(removeTodo(todo.id))}> Remove</span>
            </li>
          ))}
        </ul>
      </div>


      {/* 
      <Router>
        <Header />
        <Routes>
          {routes.map(route => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Router> */}




      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>


      <p>Change language and mode </p>

      <div>
        {languages.map((lang, index) => (
          <button onClick={() => handleLang(lang)} className={lang == language ? 'active' : ''} key={index}>{lang}</button>

        ))}
      </div>

      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? 'Lighta kech' : 'Darka kech'}
        </button>
      </div>

    </div>
  );
}

export default App;
