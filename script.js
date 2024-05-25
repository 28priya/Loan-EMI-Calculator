function getEmi() {
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const tenure = document.getElementById('tenure').value;

    if (amount && rate && tenure) {
        const monthlyRate = rate / 12 / 100;
        const emi = (amount * monthlyRate * Math.pow((1 + monthlyRate), tenure)) / (Math.pow((1 + monthlyRate), tenure) - 1);
        document.getElementById('emi').innerText = `EMI: ${emi.toFixed(2)}`;
    } else {
        document.getElementById('emi').innerText = `EMI: 0`;
    }
}
