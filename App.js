const h1 = React.createElement("h1", {
    "id": "heading1"
}, "Hello World");
const h2 = React.createElement("h2", {
    "id": "heading2"
}, "Hello World");
const container = React.createElement("div", {
    "id": "container"
}, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
