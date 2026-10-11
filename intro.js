const react = {
    createElement: function(tag,styles,children){
        const element =documnt.createElement(tag);
        if(typeof children==='object'){
            for(let val of children)
                element.append(val);
        }
        else
          element.innerText=children;
        for(let key in styles){
            element.style[key]=styles[key];
        }
      
        return element;
    }
}


const reactDom = {
    render:function(elemnt,root){
        root.append(elemnt);
    }
}

const header1= react.createElement('h1',{fontSize:"30px", backgroundColor:"blue"},"Hello coder army");
const header2 = react.createElement('h2',{},"kaise ho aap sabhi log");

const li1=react.createElement('li',{},"html");
const li2=react.createElement('li',{},"css");
const li3=react.createElement('li',{},"js");
const Ul = react.createElement('ul',{fontSize:"30px", backgroundColor:"blue"},[li1,li2,li3]);



const root =document.getElementById('root');
// root.append(header1);
// root.append(header2);
reactDom.render(header1,root);
reactDom.render(header2,root);
reactDom.render(Ul,root);















