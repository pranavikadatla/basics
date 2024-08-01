const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World From React");
const root=ReactDOM.createRoot(document.getElementById("root"));
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},[
       React.createElement("h1",{id:"grandchild1"},"I am an h1 tag"),
       React.createElement("h2",{id:"grandchild2"},"I am an h2 tag")]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"grand1"},"I am an h1 tag"),
        React.createElement("h2",{id:"grand2"},"I am an h2 tag")])])
root.render(parent);