// let donateNoakhali = document.getElementById('input-donation-amount-for-noakhali').value;

// let donateFeni = document.getElementById('input-donation-amount-for-feni').value;

// let donateQuotaInjured = document.getElementById('input-donation-amount-for-quota-injured').value;

// let balance = document.getElementById('balance').innerText;


//Donate Noakhali section
document.getElementById('btn-donation-noakhali').addEventListener('click', function(){

    const donateNoakhali = parseFloat(document.getElementById('input-donation-amount-for-noakhali').value);

    const balance = parseFloat(document.getElementById('balance').innerText);

    const noakhaliBalance = parseFloat(document.getElementById('noakhaliBalance').innerText);

    let newNoakhaliBalance = noakhaliBalance + donateNoakhali;

    document.getElementById('noakhaliBalance').innerText = newNoakhaliBalance;


    let newBalance = balance - donateNoakhali;

    document.getElementById('balance').innerText = newBalance;
})

//Donate Feni section
document.getElementById('btn-donation-feni').addEventListener('click', function(){

    const donateFeni = parseFloat(document.getElementById('input-donation-amount-for-feni').value);

    const balance = parseFloat(document.getElementById('balance').innerText);

    const feniBalance = parseFloat(document.getElementById('feniBalance').innerText);

    let newFeniBalance = feniBalance + donateFeni;

    document.getElementById('feniBalance').innerText = newFeniBalance;


    let newBalance = balance - donateFeni;

    document.getElementById('balance').innerText = newBalance;
})

//Donate Quota Injured
document.getElementById('btn-donation-quota-injured').addEventListener('click', function(){

    const donateQuotaInjured = parseFloat(document.getElementById('input-donation-amount-for-quota-injured').value);

    const balance = parseFloat(document.getElementById('balance').innerText);

    const quotaInjuredBalance = parseFloat(document.getElementById('quotaInjuredBalance').innerText);

    let newQuotaInjuredBalance = quotaInjuredBalance + donateQuotaInjured;

    document.getElementById('quotaInjuredBalance').innerText = newQuotaInjuredBalance;


    let newBalance = balance - donateQuotaInjured;

    document.getElementById('balance').innerText = newBalance;
})3