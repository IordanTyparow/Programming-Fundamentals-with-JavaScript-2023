function extract(content) {
    let getTextElement = document.getElementById(content).textContent;

    let pattern = /\((?<ress>[\w\s]+)\)/g;
    let ress = [];
    let maches = pattern.exec(getTextElement);

    while (maches) {
        ress.push(maches.groups.ress);
        maches = pattern.exec(getTextElement);
    }

    return ress.join('; ');
}