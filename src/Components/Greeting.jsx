import React from 'react';

const Greeting = () => {
    const getGreetingMessage = () => {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 12 && currentHour < 16) {
        return 'Good Afternoon';
      } else if (currentHour >= 16 && currentHour < 20) {
        return 'Good Evening';
      } else if (currentHour >= 20 || currentHour < 4) {
        return 'Good Night';
      } else {
        return 'Good Morning';
      }
    };
  
    return (
      <div>
        <h1>{getGreetingMessage()}!</h1>
      </div>
    );
  };
  
  export default Greeting;
