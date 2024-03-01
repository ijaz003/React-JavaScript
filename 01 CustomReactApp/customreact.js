function RenderElement(ReactElement, container) {
    let Domelement = document.createElement(ReactElement.type);
    
    // Set attributes
    // Domelement.setAttribute('href', ReactElement.props.href);
    // Domelement.setAttribute('target', ReactElement.props.target);
    
    // Set attribute using loop
    for (let i in ReactElement.props) {
        Domelement.setAttribute(i, ReactElement.props[i]);
    }

    Domelement.innerText = ReactElement.children;
    
    container.appendChild(Domelement);
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com', // Corrected href value with full URL
        target: '_blank' // Corrected target value with underscore
    },
    children: 'Google'
};

const DomElement = document.getElementById('root');

RenderElement(ReactElement, DomElement);
