function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    var elementoListaFilmes = document.getElementById("filmesListados");
    var elementoFilmeFavorito =
      "<li>" + "<img src=" + filmeFavorito + ">" + "</li>";
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  } else {
    alert("Este endereço de imagem é inválido!");
  }
  document.getElementById("filme").value = "";
}
