// // RenderProps Counter Class -------------------------->

// import React from 'react';
// class Counter extends React.Component {
//     state = {
//         count: 0,
//     }
//     increment=()=>{
//         this.setState((prevState) => ({
//             count: prevState.count+1
//         }));
//     }
//     render() { 
//         const {render} = this.props;
//         const {count}=this.state;
//         return render(count,this.increment);
//     }
// }
 
// export default Counter;




//RenderProps Counter Function --------------->

import { useState } from 'react';

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return render(count, increment);
};

export default Counter;
