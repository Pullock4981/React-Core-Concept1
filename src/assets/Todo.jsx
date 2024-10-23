// conditional rendaring

// type:1

// const Todo = ({task, isDone}) => {
//     return (
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     );
// };

// tupe:2
// const Todo = ({task, isDone}) => {
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// };

// type: 3

// const Todo = ({task, isDone}) => {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// };

// type:4

const Todo = ({task, isDone}) => {
    return(
        <li>
            {isDone? 'Finished: ': 'Work on: '}{task}
        </li>
    )
};

export default Todo;