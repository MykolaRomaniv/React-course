import React from 'react';

const UserInput = ( props ) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        padding: '8px',
        boerder: '2px solid blue'
      };

    return (
        <div>
            <input 
                type='text' 
                style={style}
                onChange={props.changed} 
                value={props.name}/>
        </div>
    )
};

export default UserInput;