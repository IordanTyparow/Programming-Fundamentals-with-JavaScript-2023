import { TableItem } from "../components/TableItem";

import { useState, useEffect } from "react";

export const Table = (props) => {
    let [todoItem, setTodoItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then((response) => response.json())
            .then((data) => setTodoItems(Object.values(data)));
    }, []);

    const clickHandler = (todo) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
        })
            .then((res) => res.json())
            .then((modifiedTodo) => {
                setTodoItems((oldTodos) =>
                    oldTodos.map((todo) =>
                        todo._id === modifiedTodo._id ? modifiedTodo : todo
                    )
                );
            });
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todoItem.map((x) => (
                    <TableItem key={x._id} {...x} onClick={clickHandler} />
                ))}
            </tbody>
        </table>
    );
};
