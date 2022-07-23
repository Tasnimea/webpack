import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "Welcome to my project";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());