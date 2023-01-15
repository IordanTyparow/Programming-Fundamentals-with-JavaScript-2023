function loadingBar(num) {

    let percent = '%'.repeat(num / 10);
    let dotsCount = '.'.repeat(10 - percent.length);

    if (num > 100) {
        console.log('100% Complete!');
    } else if (num < 100) {
        console.log(`${num}% [${percent}${dotsCount}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);