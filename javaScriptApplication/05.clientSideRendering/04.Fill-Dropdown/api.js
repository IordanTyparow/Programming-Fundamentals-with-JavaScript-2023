let url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function getAllItems() {
    return (await fetch(url)).json();
}

export async function postItem(text) {
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    return response.json();
}