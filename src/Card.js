import React from 'react';


const Card = ({id, name, email}) => {
    return (
        //  dib br3 pa3 ma2 grow
        <div className='bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}200x200`} alt='robot profile' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;