const cep = document.querySelector("#cep")

const showData = (resultado) => {
    for (const campo in resultado) {
        if (document.querySelector("#" + campo))
            document.querySelector("#" + campo).value = resultado[campo]
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log('ERRO' + e))


})

function enviar() {
    let bairro = document.getElementById("bairro").value;
    let localidade = document.getElementById("localidade").value;
    let uf = document.getElementById("uf").value;

    let json = {
        "bairro": bairro,
        "localidade": localidade,
        "uf": uf
    }
    console.log(json)

}
