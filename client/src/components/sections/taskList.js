import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

const Task = (props) => (
    <div className='tile'>
        <p>{props.task.content}</p>
        <p>{props.task.deadline}</p>
        <p>
            <Link className='btn btn-link' to={`/tasks/${props.task._id}`}>Open</Link> |
            <button className='btn btn-link' onClick={() => {
                props.deleteTask(props.task._id);
            }}
            >
                Delete
            </button>
        </p>
    </div>
);

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function getTasks() {
            const response = await fetch(`http://localhost:8080/tasks`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const tasks = await response.json();
            setTasks(tasks);
        }

        getTasks();

        return;
    }, [tasks.length]);

    async function deleteTask(id) {
        await fetch(`http://localhost:8080/tasks/${id}`, {
            method: 'DELETE'
        });

        const newTasks = tasks.filter((el) => el._id !== id);
        setTasks(newTasks);
    }

    function taskList() {
        return tasks.map((task) => {
            return (
                <Task
                    task={task}
                    deleteTask={() => deleteTask(task._id)}
                    key={task._id}
                />
            );
        });
    }

    return (
        <div className='task-list'>
            <div>
                {taskList()}
            </div>
        </div> 
    );
};