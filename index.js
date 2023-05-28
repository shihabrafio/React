const Container = document.querySelector('#root')

const Create = React.createElement("div",null,"hello world")

const Create2 = React.createElement("div",null,React.createElement("p",null,"hello world"))

const Create3 = React.createElement("div",null,[
    React.createElement("div",null,"hello world"),
    React.createElement("div",null,"hello world"),
])


//JSX
const Create4 = (
    <div>
        <h1 id="display">0</h1> 
        <div>
            <button id="button">Increment  +</button>
        </div>
    </div>
);

//Making a function 
const Create4clone = () => {
    return(
    <div>
        <h1 id="display">0</h1> 
        <div>
            <button id="button">Increment  +</button>
        </div>
    </div>
    );
}

const Create4clone2 = () => {
    const [counter,setcounter]= React.useState(0);
    return(
    <div>
        <h1 id="display">{counter}</h1> 
        <div>
            <button id="button" onClick={()=>setcounter(counter+1)}>Increment  +</button>
        </div>
    </div>
    );
}

// ReactDOM.createRoot(Container).render(Create4clone2());
// ReactDOM.createRoot(Container).render(<Create4clone2 />);

ReactDOM.createRoot(Container).render(
<div className = "Container">
<Create4clone2 />
<Create4clone2 />
<Create4clone2 />
</div>);