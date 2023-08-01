export function initialize(routes) {
    let nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    let context = {
        showSection,
        goTo,
    }

    function showSection(section) {
        document.getElementById('root').replaceChildren(section);
    }

    function onNavigate(event) {
        event.preventDefault();

        let target = event.target;
        if (target.tagName === 'A') {
            let url = new URL(target.href);
            goTo(url.pathname);
        }
    }

    function goTo(name, ...params) {
        let handler = routes[name];

        if (typeof handler === 'function') {
            handler(context, ...params);
        }
    }

    return context;
}