import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log(`clock ticking!`);
        setDate(new Date());
    };

    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    }, [count]); // every time count is changed then it will re-render

    useEffect(() => {
        console.log('starting timer');
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            console.log('component unmounted');  //Use this return function to stop the effect  (componentWillUnmount)
            clearInterval(interval);
        };
    }, []);// only render for the first time only one time

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}