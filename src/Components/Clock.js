//-------------------------------> Using Class
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.clocktimer = setInterval(() => this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clocktimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}
export default Clock;

// ---------------------------------->Using Function

// import React, { useState, useEffect } from 'react';

// function Clock(props) {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDate(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <h1 className="heading">
//       <span className="text">
//         {date.toLocaleTimeString(props.locale)}
//       </span>
//     </h1>
//   );
// }

// export default Clock;
