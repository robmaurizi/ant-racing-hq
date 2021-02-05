import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import generateAntWinLikelihoodCalculator from './helpers/antWinAlgorithm'
import antsReducer from './reducers/antsReducer';

import AntsList from './components/AntsList';
import Controls from './components/Controls';
import AntsMarching from './components/AntsMarching';
import LoginScreen from './components/LoginScreen';

import './App.scss';

const ANTS_QUERY = `
query Ants {
    ants {
      name
      length
      color
      weight
    }
  }
`;

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ state, dispatch ] = useReducer( antsReducer, { ants: [], status: 'Not yet run', count: 0 } );

  useEffect( () => {

      const fetchAnts = async() => {
          const {data} = await axios.post('/graphql', {
              query: ANTS_QUERY
          }, {
              headers: {
                  "Content-Type": "application/json"
              }
          });
          data.data.ants.forEach( (ant, i) => {
            ant.key = i; 
            ant.odds = null; 
            ant.oddsStatus = 'Not yet started'; 
            ant.shouldAnimate = false 
          });
          dispatch({ type: 'add_ants', payload: data.data.ants });
      };

      fetchAnts();
  
  }, [] );

  useEffect( () => {

    dispatch( { type: 'reset_ants', payload: { status: 'Not yet run' } });

  }, [isLoggedIn] );

  useEffect( () => {

    if ( state.ants.length && state.count !== 0 ) {
      dispatch( { type: 'update_ants_order' } );

      if ( state.count === state.ants.length ) {
        dispatch( { type: 'update_odds_status', payload: 'All Calculated!' });
      }
    }
    
  }, [state.count, state.ants.length ] );


  const onOddsPress = () => {
    dispatch( { type: 'update_odds_status', payload: 'In progress...' });
    
    let theAnts = [...state.ants];

    theAnts.forEach( async (ant, i) => {

      generateAntWinLikelihoodCalculator()( (theOdds) => {
        dispatch( {type: 'add_odds', payload: { index: i, odds: theOdds }});
      } );
    });

  };


  return (
    <div className="App">
      { !isLoggedIn 
        ? <LoginScreen setLogin={ setIsLoggedIn } />  
        : <>
            <Controls onOddsPress={ onOddsPress } oddsStatus={ state.status } onLogout={() => { setIsLoggedIn(false); }} />
            <AntsList ants={ state.ants } />
            <AntsMarching />
          </>
      }
    </div>
  );
};

export default App;
