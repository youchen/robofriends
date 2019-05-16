import React from 'react';
import Card from './Card';

const CardList = ({users}) => {
    const CardArray = users.map((u, i) => {
        return (
            <Card key={i} id={users[i].id} name={users[i].name} email={users[i].email} />
        )
    });
    return (
        <div>
            {CardArray}
        </div>
    );
}

export default CardList;