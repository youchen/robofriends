import React from 'react';


const Card = ({id, name, email}) => {
    return (
        // <div className='bg-light-blue dib ma2 pa3 br3 grow bw2 shadow-5 tc'>
        <div className='dib ma2 br3 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}200x200`} alt='robot profile' 
                className='bg-light-blue br3 br--top'
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;