import React from 'react';
import {v4 as uuidv4} from 'uuid';

const AppContext = React.createContext();

const Input = () => {

    const [task,setTask,tasklist,setTasklist] = React.useContext(AppContext);
    const onChange = (e) => {
        setTask(e.target.value);
    }
    const onKeyupHandler = (e) => {
        if(e.keyCode === 13 && task !== ""){
            setTasklist([{item:task, id:uuidv4(), done:false}, ...tasklist]);
            setTask('');
        }
    }
    
    return (
        <div className="w-1/2 justify-center flex self-center mb-5">
            <input type='text' className='border-2 border-grey w-full p-1 '
                value = {task}
                onChange = {onChange}
                onKeyUp = {onKeyupHandler}/>
            
        </div>
    )
}

const Content = () => {
    const [task,setTask,tasklist,setTasklist] = React.useContext(AppContext);
    
    const onClickCompleteHandler = (id) => {
        const newtasklist = tasklist.map((x) => {
            if(x.id === id) x.done = !(x.done)
            return x;
        });
        setTasklist(newtasklist);
    }
    const onClickRemoveHandler = (id) => {
        setTasklist(tasklist.filter((x) => x.id !== id));
    }

    return (
        <ul className="flex flex-col w-full">
            {tasklist.map((x) => {
                return (
                    <li key={x.id} className="p-1 w-1/2 m-auto flex justify-between items-center">
                        <span>
                            <input 
                                type="checkbox" 
                                className="ml-1.5 mr-5" 
                                defaultChecked={x.done}
                                onClick={() => onClickCompleteHandler(x.id)}
                            />
                            <span className={x.done? "line-through" : ""}>{x.item}</span>
                        </span>
                        <span 
                            className="justify-self-end"
                            onClick={()=> onClickRemoveHandler(x.id)}
                        >
                            <i className="fa fa-trash" style={{color:'red'}}></i>
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}

const Container = () => {
    const [task, setTask] = React.useState('');
    const [tasklist, setTasklist] = React.useState([]);

    return (
        <div id='container' className='flex flex-col max-w-6xl mx-auto justify-center'>
            <div className='flex flex-col m-5 justify-center'>
                <AppContext.Provider value={[task,setTask,tasklist,setTasklist]}>
                    <Input/>
                    <Content/>
                </AppContext.Provider>
            </div>
        </div>
    );
}

export default Container;