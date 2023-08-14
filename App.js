import React from "react";
import ReactDOM from "react-dom/client";

/*

// React 
const h1 = React.createElement("h1", {
    id: "heading1",
    key: "h1"
}, "Hello World");
const h2 = React.createElement("h2", {
    id: "heading2",
    key: "h2"
}, "Hello World");
const container = React.createElement("div", {
    "id": "container"
}, [h1, h2]);

// JSX
const heading = (
    <h1 id="heading" key="heading">
        Hello world from JSX
    </h1>
);
console.log(container);

*/

//JSX
const heading = (
    <h1 id="heading" key="heading">
        Hello world from JSX
    </h1>
);

//Component

const Title = () => (
    <h2 id="heading" key="heading">
        Hello world from TitleComponent
    </h2>
);

const Title2 = () => (
    <h2 id="heading" key="heading">
        Hello world from TitleComponent 2
    </h2>
);

const HeaderComponent = () => {
    return (
        <div>
            {/* we can write any js code inside {} hence we can use the react elements like this */}
            {heading}
            <Title/>
            <Title2> </Title2>
            {/* can also be called like Title() bcoz it is normal js function */}
            {Title()}
            <h1>Hello from HeaderComponent</h1>
            <h2>h2 tag</h2>
        </div>
    );
}

const HeadingComponent = () => {
    return (
        <div width="99%">
            <div className="col-lg-3">
                <img src="D:\react-js\logo.png" />
            </div>
            <div className="col-lg-3">
                Search
            </div>
            <div className="col-lg-3">
                User
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
