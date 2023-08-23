function requestValidator(request) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w\.]+$/;
    let messageText = /[<>\\&'"]/;

    if (!request.method || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.uri || request.uri === '' || !uriRegex.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!request.version || !validVersion.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (request.message === undefined || messageText.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
});