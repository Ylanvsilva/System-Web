/**
 ** 1° Localizar o elemento de lista, para colocar o conteudo da lista, na nova lista que sera gerada dentro dela -> const list = document.getElementById("list");
 ** 2° Pegar o que o usuario ta digitando -> const text = document.getElementById("task_name").value;
 ** 3° Cria o (li), colocar dentro do (listItem) o texto, e colocar dentro da (list) o (listItem) -> const listItem = document.createElement("li");
 */

function addNewTask () {
    //* Pegar no documento html, onde esta a lista para renderizar o que esta dentro da lista o que foi digitado
    const list = document.getElementById("list");
    
    //* Pegar o valor que foi digitado dentro do campo, e pegar o que o usuario digitou
    const text = document.getElementById("task_name").value; //* (Value) -> Para pegar o valor que o usuario digitou
    
    //* Foi pego o (text.value), ele e uma string, e pode ser verificado o tamanho da string com (length)
    //* E se o texto da minha string for vazio ou (0), pode colocar um alerta
    if(text.length === 0) { //* Se foi digitado um texto em (branco)
        alert('Tarefa precisa de ter mais de 1 caracter.');
        return; //* Para sair da função
    }
    
    //* Criando a lista de itens
    const listItem = document.createElement("li"); //* Cria um (li) para colocar dentro do (ul)

    //* Adicionando a classe do CSS no (listItem)
    listItem.className = "list-item";
    
    //* Criando elemento de texto
    const textElement = document.createTextNode(text); //* Cria um texto na pagina (createTextNode), com o texto que o usuario digitou

    //* Apos a criação text
    listItem.appendChild(textElement); //* listItem vai ser o parente do (textElement)

    //* E dentro da lista
    list.appendChild(listItem);
}