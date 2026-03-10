async function convert() {
    
    
    let amount = document.getElementById("amount").value;
    let valuta = document.getElementById("valuta").value;
    console.log(amount)
    let url = `https://hexarate.paikama.co/api/rates/HUF/${valuta}/latest`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let rate = data.data.mid;
    console.log(rate);
    let result = amount * rate;
    
    document.getElementById("result").innerHTML = 
    `${amount} HUF = ${result.toFixed(2)} ${valuta}`
}