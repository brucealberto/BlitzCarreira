import { useEffect, useState } from 'react';
import { getAllTasks } from '../services/tasksServices';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getAllTasks();
      setTasks(data);
    })();
  }, []);

  return (
    <h2>
      {tasks.map((t) => (
        <li>
          {t.tasks} == {t.completed}
        </li>
      ))}
    </h2>
  );
}

export default Tasks;

// async function handleSubmit(event){
//   event.preventDefault()
//   // const originalTask = tasks
//     const {data} = await createTasks(currentTask)
//     tasks.push(data)
//   return  setTasks(tasks, setCurrentTask(''))
// deploy

// }
