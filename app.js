const element = React.createElement("h1",{id:"first" ,className:"rahul",style:{backgroundColor:"blue" ,fontFamily:"emoji"}},"Hello coder army");
const element2 = React.createElement("div")
// // ReactDom.render(element,document.getElementById('root'));

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// const element = document.getElementById("root");
// const header1=document.createElement('h1');
// header1.innerText= "hello coder army";
// element.append(header1);