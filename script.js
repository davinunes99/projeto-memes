async function carregarMemes() {
    const url = 'https://66fc5de7c3a184a84d16e14d.mockapi.io/api/memes'
    const resposta = await fetch(url)
    const informacoesMemes = await resposta.json()
    const divGaleria = document.querySelector('#galeria')
    divGaleria.innerHTML = ''
    informacoesMemes.forEach(meme =>{
        const htmldoMeme = `
        <div class="card">
            <h3>${meme.titulo}</h3>
            <img src="${meme.linkImagem}" alt="">
            <p>${meme.dataCadastro}</p>
            <p>${meme.likes}</p>
        </div>`
        divGaleria.innerHTML += htmldoMeme
    });
}
carregarMemes()