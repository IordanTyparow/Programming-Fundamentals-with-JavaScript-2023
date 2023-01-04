function charactersInRange(firstChar, secondChar) {

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let result = '';
    
    for (let i = rangeStart + 1; i < rangeEnd; i++) {
        let toSymble = String.fromCharCode(i);

        result += `${toSymble} `;
    }
    console.log(result);
}

charactersInRange('#', ':');