
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Modal from 'react-modal';
import App from './App.js';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: ""
//         }
//     }


//     handleSubmit=() => {
//         console.log("Submit");
//     }

//     onInputChange =(e) => {
//         var name = e.target.value;
//         this.setState({
//             name:name
//         },()=>{
//             console.log("==> "+ this.state.name);
//         })
//     }

//     render() {
//         return (
//             <section>
//                 <input type="text" value={this.state.name} onChange={this.onInputChange}/>
//                 <button disabled={
//                     this.state.name.length ?false : true
//                 } 
//                 onClick={this.handleSubmit}> Submit</button>

//             </section>
//         )
//     }
// }

ReactDOM.render(
    <App />
    , document.getElementById('root'));
// import TodoItem from './components/TodoItem';
// import TodoForm from './components/TodoForm';
// import $ from 'jquery';
// import { Router, Route, browserHistory, Link,Redirect } from 'react-router';
// class TodoList extends React.Component {


//     render(){
//         return (
//             <div>
//             <App/>
//             </div>
//         )
//     }
// }
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: []
//         }
//     }


//     componentDidMount() {
//         console.log("did mount called..")
//         $.ajax({
//             url: 'https://jsonplaceholder.typicode.com/users',
//             success: (data) => {
//                 this.setState({
//                     users: data
//                 })
//             }
//         })
//     }


//     render() {
//         console.log("render method called..");
//         console.log(this.state.users);
//         const { users } = this.state;
//         return (
//             <div>
//                 <ul>
//                     {
//                         users.map((user) => {
//                             return <li key={user.id}>{user.name} </li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
    // }
    // constructor() {
    //     super();
    //     this.state = {
    //         tasks: [
    //             {
    //                 name: 'Buy Milk',
    //                 completed: false
    //             },
    //             {
    //                 name: 'Buy Shugar',
    //                 completed: false
    //             },
    //             {
    //                 name: 'Buy Chees',
    //                 completed: true
    //             }
    //         ],
    //         currentTask: ""
    //     }
    //     this.addTask = this.addTask.bind(this);
    //     this.deleteTask = this.deleteTask.bind(this);
    //     this.changeState = this.changeState.bind(this);
    //     this.updateTask = this.updateTask.bind(this);
    //     this.editTask = this.editTask.bind(this);
    // }

    // editTask(index,newValue){
    //     console.log(index +" "+newValue);
    //     var tasks = this.state.tasks;
    //     var task = tasks[index];
    //     task.name = newValue;
    //     this.setState({
    //         tasks :tasks
    //     });
    // }

    // deleteTask(index) {
    //     console.log(index);
    //     var tasks = this.state.tasks;
    //     tasks.splice(index,1);
    //     this.setState({
    //         tasks:tasks
    //     });
    // }
    // addTask(event) {
    //     event.preventDefault();
    //     let tasks = this.state.tasks;
    //     let currentTask = this.state.currentTask;
    //     console.log('--------------')
    //     console.log(currentTask);
    //     tasks.push({
    //         name: currentTask,
    //         completed: false
    //     });
    //     this.setState({
    //         tasks: tasks,
    //         currentTask: ''
    //     });
    // }

    // changeState(index) {
    //     var tasks = this.state.tasks;
    //     var task = tasks[index];
    //     task.completed = !task.completed;
    //     this.setState({
    //         tasks: tasks
    //     });
    // }

    // updateTask(newValue) {
    //     console.log(newValue.target.value);
    //     this.setState({
    //         currentTask: newValue.target.value
    //     })
    // }

    // render() {
    //     return (
    //         <section>
    //             <TodoForm
    //                 currentTask={this.state.currentTask}
    //                 updateTask={this.updateTask}
    //                 addTask={this.addTask}
    //             />
    //             <ul>
    //                 {this.state.tasks.map((task, index) => {
    //                     return <TodoItem
    //                         key={index}
    //                         clickHandler={this.changeState}
    //                         index={index}
    //                         detail={task}
    //                         deleteTask ={this.deleteTask} 
    //                         editTask = {this.editTask}/>
    //                 })
    //                 }

    //             </ul>
    //         </section>
    //     )
    // }
// }

// const App = () => (
//     <div>
//         <Link to="/about"> App Component </Link>
//         <h2>App Component</h2>
//     </div>
// );

// const About = (props) => (
//     <div>
//         <Link to="/about">About</Link>
//         {props.routeParams.id} {" "}
//         {props.location.query.name} {" "}
//         {props.location.query.add}
//         <h2>About Component</h2>
//     </div>
// );

// const Notfound = () => (
//     <div>
//         <h2>Not Found</h2>
//     </div>
// );


