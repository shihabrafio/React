// import React from "react";

// const withCounter = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     state = {
//       count: 0,
//     };
//     increment = () => {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//       }));
//     };
//     render() {
//       const { count } = this.state;
//       return <OriginalComponent count={count} increment={this.increment} />;
//     }
//   }
//   return NewComponent;
// };

// export default withCounter;

import React, { useState } from "react";

const withCounter = (OriginalComponent) => {

  const NewComponent = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
    
    return <OriginalComponent count={count} increment={increment} />;
  };
  return NewComponent;
};

export default withCounter;
