function solve(selector) {

    const htmlElement = document.querySelector(selector);
    htmlElement.classList.add('highlight');

    highlightChildren(htmlElement);

    function highlightChildren(element) {
        const children = element.children;

        if (children.length === 0) {
            return;
        }

        for (let index = 0; index < children.length; index++) {
            highlightChildren(children[index]);
            children[index].classList.add('highlight');
        }
    }
}