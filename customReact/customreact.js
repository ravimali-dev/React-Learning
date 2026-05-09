


function reactRender(reactElement, container){
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
        console.log(reactElement.props.prop)
    }
    container.appendChild(domElement);
}




let reactElement = {
  type: "a",

  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit"
};

const myContainer =
document.getElementById("root");

reactRender(reactElement, myContainer);