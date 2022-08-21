import React from "react";
import Card from './Card';


const CardList = ({ robotsArray }) => {
    if (!robotsArray.length) {
        return <h1>No Such Robots</h1>
    }
    return (
        <>
            {robotsArray.map(robot => {
                return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
            })}
        </>
    );
}

export default CardList;