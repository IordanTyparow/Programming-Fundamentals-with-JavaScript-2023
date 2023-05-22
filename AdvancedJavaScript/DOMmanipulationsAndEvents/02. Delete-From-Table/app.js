function deleteByEmail() {

    let emails = document.querySelectorAll('tr td:nth-of-type(2)');
    let inputField = document.querySelector('input[name="email"]').value;
    let result = document.getElementById('result');

    for (const td of emails) {
        if (td.textContent === inputField) {
            td.parentElement.remove();
            result.textContent = 'Deleted.'
        } else {
            result.textContent = 'Not found.';
        }
    }
}