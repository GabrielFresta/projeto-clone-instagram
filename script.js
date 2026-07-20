// 1Funcuinailidade de curtidas

// O botão de like e o número de curtidas na tela
const btnLike = document.querySelector(".btn-like");
const likesQty = document.getElementById("likes-qty");

// Variáveis de controle de estado
let curtido = false;
let quantidadeLikes = 42;

btnLike.addEventListener("click", () => {
  if (!curtido) {
    // Se não tiver curtido, muda o ícone para Vermelho em alguns navegadores
    btnLike.textContent = "❤️";
    btnLike.style.color = "red"; // tom de vermelho em alguns navegadores
    quantidadeLikes++;
    curtido = true;
  } else {
    // Se já estiver curtido, volta para o padrão e subtrai 1
    btnLike.textContent = "🤍";
    btnLike.style.color = "";
    quantidadeLikes--;
    curtido = false;
  }

  // Atualiza o númeto que aparece na tela
  likesQty.textContent = quantidadeLikes;
});

// 2 Adicionar comentários Dinamicaente

// Selecionamos o formulário, i input de texto e a lista onde entram os comentários
const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const commentsList = document.getElementById("comments-list");

function carregarComentarios() {
  const comentariosSalvos =
    JSON.parse(localStorage.getItem("meusComentarios")) || [];

  comentariosSalvos.forEach((textoDoComentario) => {
    const newComment = document.createElement("li");
    newComment.innerHTML = `<strong>tiago_mello</strong> ${textoDoComentario}`;
    commentsList.appendChild(newComment);
  });
}
//  Executar a função logo de cara para mostrar os documentários antigos
carregarComentarios();

commentForm.addEventListener("submit", (event) => {
  // Evita que a página recarregue ao enviar o form
  event.preventDefault();

  const commentText = commentInput.value.trim();

  // Só adiciona se o usuário tiver digitando algo.
  if (commentText !== "") {
    //Criando um elemento novo na lista (li)
    const newComment = document.createElement("li");

    // Novo comentário
    newComment.innerHTML = `<strong>tiago_mello</strong> ${commentText}`;

    //  Add o novo item no final da lista de comentários
    commentsList.appendChild(newComment);

    const comentariosSalvos =
      JSON.parse(localStorage.getItem("meusComentarios")) || [];
    comentariosSalvos.push(commentText);
    localStorage.setItem("meusComentarios", JSON.stringify(comentariosSalvos));
    // Limpando o campo de texto para o próximo comentário
    commentInput.value = "";
  }
});
