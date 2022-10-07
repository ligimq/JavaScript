function contar() {
  var ini = document.getElementById('txti');
  var fim = document.getElementById('txtf');
  var passo = document.getElementById('txtp');
  var res = document.getElementById('res');

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar!';
  }
}
