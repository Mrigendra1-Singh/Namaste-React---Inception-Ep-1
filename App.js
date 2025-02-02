
/*
<div id = "parent">
<div id = "child">
<h1> I m h1 tag </h1>
</div>
</div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
React.createElement("div",{id: "child"},[ React.createElement("h1",{},"I m an h1 tag"),
React.createElement("h2",{},"I m an h2  tag"),
]),
React.createElement("div",{id: "child2"},[ React.createElement("h1",{},"I m an h1 tag"),
React.createElement("h2",{},"I m an h2  tag"),
])
);   

//JSX
 
/*
const heading = React.createElement("h1",{ id: "heading"},
"Hello World from React");

 console.log(heading) // Return object
*/

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));

 // root.render(heading);

 root.render(parent);