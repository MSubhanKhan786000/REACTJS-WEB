import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 1234, name: "Do React JS", completed: true },
    { id: 5721, name: "Do React JS Projects", completed: false },
    { id: 9812, name: "Do React Next JS", completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => id !== task.id));
  }
  return (
    <>
      <h1>Tasks List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          Toggle
        </button>
        {show &&
          tasks.map(task => (
            // key is passed to the top most parent not to the new component
            <TaskCard
              info={info}
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            ></TaskCard>
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          blanditiis.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          blanditiis.
        </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          nemo, quidem est facilis qui cupiditate dignissimos sapiente?
        </p>
      </BoxCard>
    </>
  );
};
