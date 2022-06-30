const adviceContainer = document.querySelector('#advice');
const adviceNumber = document.querySelector('#advice-number');
const adviceButton = document.querySelector('.advice-button');


async function apiCall() {
    let url = 'https://api.adviceslip.com/advice';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getAdvice() {
    let response = await apiCall();
    const { advice, id } = response.slip;
    adviceContainer.textContent = `"${advice}"`;
    adviceNumber.textContent = `ADVICE #${id}`;
}

getAdvice()

adviceButton.addEventListener('click', function (e) {
    e.preventDefault();
    getAdvice();
});

adviceButton.addEventListener('keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 32 || e.keyCode === 13) {
        getAdvice();
    }
});

