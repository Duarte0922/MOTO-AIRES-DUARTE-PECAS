// 1. Pegamos os elementos do HTML usando as "etiquetas" (IDs) que criamos
const botao = document.getElementById('btn-adicionar');
const textoClientes = document.getElementById('qtd-clientes');

// 2. Criamos uma variável para guardar o número atual de clientes
let numeroAtual = 120;

// 3. Dizemos para o botão "ficar ouvindo" o clique do usuário
botao.addEventListener('click', function() {
    
    // Somamos mais 1 ao número atual
    numeroAtual = numeroAtual + 1;
    
    // Atualizamos o texto lá na tela com o novo valor
    textoClientes.innerText = numeroAtual;
    
});