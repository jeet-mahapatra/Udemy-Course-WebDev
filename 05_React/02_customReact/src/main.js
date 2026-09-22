
function customRender(reactElement , container){
    const myElement = document.createElement(reactElement.type);
    myElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        myElement.setAttribute(prop , reactElement.props[prop])
    }
    container.append(myElement)
}

const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click me to go to the google"
}

const anotherElement = {
    type : "img",
    props:{
        src : "https://img.magnific.com/free-photo/litterle-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",
        target : "_blank",
        alt : "Cat Image"
    },
    children : "Image"
}

const mainContainer = document.getElementById("root")

customRender(reactElement , mainContainer)
customRender(anotherElement , mainContainer)

