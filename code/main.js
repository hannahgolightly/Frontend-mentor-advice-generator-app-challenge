const adviceContainer = document.querySelector('#advice');
const adviceNumber = document.querySelector('#advice-number');

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