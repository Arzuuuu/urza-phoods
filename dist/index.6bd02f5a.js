const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "This is heading1"),
        React.createElement("h2", {}, "This is heading2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "This is heading1"),
        React.createElement("h2", {}, "This is heading2")
    ])
]);
// const heading = React.createElement("h1", {id:"heading"}, "Heading By React");
console.log(parent);
// create root inside React to perform DOM manipulation
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
