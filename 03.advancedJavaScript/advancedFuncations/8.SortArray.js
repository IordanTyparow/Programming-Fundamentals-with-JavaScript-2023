function sortArray(array, format) {
    if (format === 'asc') {
        return array.sort((a,b) => a - b);
    } else {
        return array.sort((a,b) => b - a);
    }
}

sortArray([14, 7, 17, 6, 8], 'desc');