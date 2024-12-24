window.addEventListener('load', function() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    setTimeout(function() {
        const snowflakeLoading = document.createElement('img');
        snowflakeLoading.classList.add('snowflake-loading');
        snowflakeLoading.src = 'assets/snowflake.svg';
        snowflakeLoading.style.position = 'absolute';
        document.body.appendChild(snowflakeLoading);
    }, 0);

    setTimeout(function() {
        document.querySelector('.snowflake-loading').style.opacity = '0';
    }, 2000);

    /*
    const snowflakes = [];
    for (let i = 0; i < 4; i++) {
        const snowflake = document.createElement('span');
        snowflake.classList.add('snowflake-decor');
        snowflake.innerHTML = '&#10052;';
        snowflake.style.position = 'absolute';
        snowflake.style.opacity = '0';
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);
    }

    */

    setTimeout(function() {
        document.querySelectorAll('.hidden').forEach(function(element) {
            element.classList.remove('hidden');
            element.classList.add('visible');

            snowflakes.forEach(snowflake => {
                snowflake.style.opacity = '1';
                snowflake.style.transition = 'opacity 3s ease-in-out';
            });
        });
    }, 3000);

    setTimeout(() => {
        const positions = [
            { top: '-25px', left: '15px' },
            { top: '-25px', right: '15px' },
            { bottom: '-15px', left: '15px' },
            { bottom: '-15px', right: '15px' },
        ];

        snowflakes.forEach((snowflake, index) => {
            Object.assign(snowflake.style, positions[index]);
        });
    }, 3000);
});