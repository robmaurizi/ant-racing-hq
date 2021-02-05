import React from 'react';
import './Controls.scss';

const Controls = ( { onOddsPress, oddsStatus, onLogout } ) => {

    return (
        <header className="controls">
            <h1>Racing Ants HQ</h1>
            <div className="control-panel">
                { oddsStatus === 'Not yet run' 
                    ? <button onClick={ onOddsPress }>Calculate Odds of Winning</button>
                    : <div className="controls-status">Calculation Status: <strong>{ oddsStatus }</strong></div>
                }
                { oddsStatus === 'All Calculated!'
                    ? <button className="recalculate-button" onClick={ onOddsPress }>Re-Calculate Odds</button>
                    : null 
                }
                <button className="logout-button" onClick={ onLogout }>Log Out</button>
            </div>
        </header>
    );

};
export default Controls;