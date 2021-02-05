import React from 'react';

import Ant from './Ant';

import './AntsList.scss';

const AntsList = ( {ants} ) => {

    return (
        <div className="ants-list">
            { ants.map( (ant) => {
                return <Ant key={ant.key} name={ant.name} length={ant.length} color={ant.color} weight={ant.weight} odds={ant.odds} oddsStatus={ant.oddsStatus} shouldAnimate={ant.shouldAnimate} />
            }) }
        </div>
    )

};

export default AntsList;
  