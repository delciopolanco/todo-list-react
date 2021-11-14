import { useRef, useState } from 'react';
import { Input, List, ListItem, Button, Icon, Wrapper, Span } from '../components';

const TASK_COMPLETE = 'COMPLETE';
const TASK_NEW = '';

const Todos = () => {

  const [todo, setTodo] = useState([]);
  const inputEl = useRef(null);

  const addTask = (e, input) => {
    if (input && !input.current.value) return;

    const name = input.current.value;
    setTodo([...todo, {
      name,
      state: TASK_NEW
    }]);
    console.log(todo);
    input.current.value = '';
  }

  const handlerOnchange = (e, taskIndex) => {
    if (e) e.stopPropagation();

    const checked = e.currentTarget.checked;
    const task = todo[taskIndex];
    task.state = checked ? TASK_COMPLETE : TASK_NEW;
    setTodo([...todo]);
  }


  const deleteHandler = (e, taskIndex) => {
    if (e) e.preventDefault();
    todo.splice(taskIndex, 1);
    setTodo([...todo]);
  }


  return (
    <Wrapper>
      <h2>TODO TASK</h2>
      <div className="todo">
        <div className="todo-actions">
          <Input ref={inputEl} type="text" name="todo" />
          <Button onClick={(e) => addTask(e, inputEl)}>Agregar</Button>
        </div>
        <List>
          {todo.map((t, i) => {
            return <div key={t.name + i}>
              <ListItem completed={t.state}>{t.name}</ListItem>
              <Input type='checkbox' onChange={(e) => handlerOnchange(e, i)} />
              <Icon className={'icon-delete'} onClick={(e) => deleteHandler(e, i)}></Icon>
            </div>
          })}
          {!todo.length && <Span>Add your first task..</Span>}
        </List>
      </div>
    </Wrapper>
  )
}

export { Todos }