const antsReducer = (state, action) => {
    
    switch (action.type) {
  
      case 'add_ants':
        return { ...state, ants: action.payload };
  
      case 'add_odds':
        const theAnts = state.ants.map( (ant, i) => {
          if ( ant.key === action.payload.index) {
            ant.odds = action.payload.odds;
            ant.oddsStatus = 'Calculated';
          }
          return ant;
        });
        return { ...state, ants: theAnts, count: state.count + 1 };
  
      case 'update_odds_status':
        switch ( action.payload ) {
          case 'In progress...' :
            return { ...state, count: 0, status: action.payload, ants: state.ants.map( ant => {
              ant.oddsStatus = action.payload;
              ant.odds = null;
              ant.shouldAnimate = false;
              return ant;
            })
          }
          case 'All Calculated!' :
            return { ...state, ants: state.ants.map( ant => {
              ant.shouldAnimate = true;
              return ant;
            }), status: action.payload}

          default:
            return { ...state, status: action.payload };
        }
  
      case 'update_ants_order':
        const ordered = state.ants.sort( (a, b) => ( a.odds < b.odds ) ? 1 : -1 );
        return { ...state, ants: ordered };

      case 'reset_ants':
        return { ...state, status: action.payload.status, ants: state.ants.map( ant => {
          ant.odds = null;
          ant.shouldAnimate = null;
          ant.oddsStatus = action.payload.status;

          return ant;
        })};
  
      default:
        return state;
    }
};

export default antsReducer;