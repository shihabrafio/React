// //-------------------------------> Using Class
// import React from "react";

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date(), locale:"bn-BD" };
//     // For using bind()
//     // this.handleClick =this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     this.clocktimer = setInterval(() => this.tick, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.clocktimer);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   handleClick = ()=>{
//     this.setState({
//       locale:"en-US",
//     })
//   }

//   //Using bind()
//   // handleClick(){
//   //   this.setState({
//   //     locale:"en-US",
//   //   })
//   // }

//   render() {
//     const {date, locale} = this.state
//     return (
//       <div>
//         <h1 className="heading">
//         <span className="text">
//           {date.toLocaleTimeString(locale)}
//         </span>
//       </h1>
//       <button type="button" onClick={this.handleClick}>Click Here</button>
//       </div>
//     );
//   }
// }
// export default Clock;

// ---------------------------------->Using Function

import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [isBangla, setIsBangla] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setIsBangla(!isBangla);
  };

  const getTimeString = () => {
    if (isBangla) {
      return date.toLocaleTimeString("bn-BD");
    } else {
      return date.toLocaleTimeString("en-US");
    }
  };

  return (
    <div>
      <h1 className="heading">
        <span className="text">{getTimeString()}</span>
      </h1>
      <button type="button" onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default Clock;
