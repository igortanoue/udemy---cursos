const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
    
]

const container = document.querySelector('.container');
const div = document.createElement('div');
// percorerr o elemento

for (let i = 0; i < elementos.length; i++) {
    //elementos[i].tag vc pega os primeiros valores. Porem vamos fazer como desestruturação
   let { tag, texto } = elementos [i];
   let tagCriada = document.createElement(tag);
   let textoCriado = document.createTextNode(texto);
   
   tagCriada.innerText = texto;
   div.appendChild(tagCriada);
   
}

container.appendChild(div);