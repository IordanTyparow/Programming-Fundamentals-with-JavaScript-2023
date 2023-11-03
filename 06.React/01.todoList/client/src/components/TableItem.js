export const TableItem = (props) => {
    return (
        <tr className={props.isCompleted ? "todo is-completed" : "todo"}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? "Completed" : "Not Completed"}</td>
            <td className="todo-action">
                <button
                    className="btn todo-btn"
                    onClick={() => props.onClick(props)}
                >
                    Change status
                </button>
            </td>
        </tr>
    );
};
