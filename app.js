const heading = React.createElement("h1",{id:"heading"},"Namastey React 🙏🏽");
const root = ReactDOM.createRoot(document.getElementById("root"));




const parent = React.createElement("div",{id:"parent"},[
        
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Hello By Adele"),
    React.createElement("h2",{},"This is a heading 2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hello By Adele"),
        React.createElement("h2",{},"This is a heading 2")
    ])
    ]
)
root.render(parent);