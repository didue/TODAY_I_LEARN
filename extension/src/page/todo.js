import React from 'react';

const Input = () => {

    const [task, setTask] = React.useState('');
    const onKeyupHandler = (e) => {
        if(e.keyCode === 13) setTask(e.target.value);
    }

    return (
        <div className="w-1/2 justify-center">
            <input type='text' className='border-2 border-black w-full p-1'
                onKeyUp={onKeyupHandler}/>
            {task}
        </div>
    )
}

const Items = () => {
    
}

const Container = () => {
    return (
        <div id='container' className='flex flex-col max-w-6xl mx-auto justify-center'>
            <div className='flex m-5 justify-center'>
                <Input/>
            </div>
        </div>
    );
}

export default Container;