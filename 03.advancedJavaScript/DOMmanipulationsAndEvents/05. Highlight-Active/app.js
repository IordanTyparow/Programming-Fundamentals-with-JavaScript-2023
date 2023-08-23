function focused() {
    
    let inputElements = document.getElementsByTagName('div')[0];

    Array.from(inputElements.getElementsByTagName('input')).forEach(element => {
        element.addEventListener('focus', focus);
    });

    Array.from(inputElements.getElementsByTagName('input')).forEach(element => {
        element.addEventListener('blur', focusLost);
    });

    function focus(e) {
        let parent = e.currentTarget.parentNode;
        parent.classList.add('focused');
    }

    function focusLost(e) {
        let parent = e.currentTarget.parentNode;
        parent.classList.remove('focused');
    }
}