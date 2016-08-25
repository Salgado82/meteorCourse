// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Create a component
const App = () => {
  return(
    <div>
      Un segundo saludo para React
    </div>
  );
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
