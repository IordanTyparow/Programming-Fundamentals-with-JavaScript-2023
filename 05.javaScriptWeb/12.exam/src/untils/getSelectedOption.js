function getSelectedOption(category) {
    const categories = {
        //all options
    };

    categories[category] = categories[category].replace(
        `value="${category}"`,
        `value="${category}" selected`
    );

    return Object.values(categories);
}

module.exports = { getSelectedOption };
