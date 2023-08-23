let host = 'http://localhost:3030';

export async function request(method, url, data) {
    let options = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    let user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        let response = await fetch(host + url, options);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    } catch (error) {
        alert(error.message);
    }
}

export const post = request.bind(null, 'POST');
export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');