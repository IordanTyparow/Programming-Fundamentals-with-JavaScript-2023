export async function getAllStudents() {
    let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
    let data = await response.json();
    
    return data;
}