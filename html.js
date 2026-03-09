async function convert() {
    
    let amount = document.getElementById("amunt").value;
    let valuta = document.getElementById("valuta").value;

    let url = `https://hexarate.paikama.co/api/rates/latest/HUF?target=${valuta}`;

    let response = await fetch(url);
    let data = await response.json();

    let rate = data.data.mind;

    let result = amount * rate;
    
    document.getElementById("result").innerText = 
    `${amount} HUF = ${result.toFixed(2)} ${valuta}`
}