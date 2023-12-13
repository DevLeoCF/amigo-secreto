var amigos = [];

const adicionar = () => {

    let listaAmigos = document.getElementById('lista-amigos')
    let amigo = document.getElementById('nome-amigo')

    if(amigo.value == ''){
        alert('Insira o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Amigo já adicionado!');
        return;
    }

    amigos.push(amigo.value)

    if(listaAmigos.innerHTML == ''){
        listaAmigos.innerHTML = amigo.value
    } else {
        listaAmigos.innerHTML = listaAmigos.innerHTML + ', ' + amigo.value
    }

    amigo.value = ''

}

const sortear = () => {

    if(amigos.length < 4){
        alert('Insira pelo menos 4 amigos para realizar o sorteio');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }

}

const reiniciar = () => {

    amigos = [];

    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').value = '';

}

const embaralhar = (lista) => {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }

}