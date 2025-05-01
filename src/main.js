/* Esta linea consigue el formulario llamado "formulario" y le añadeun evento llamado "submit
que cuando el formulario sea llamdo se active la funcion calculadora" */

document.getElementById("formulario").addEventListener("submit",function(e) {
  e.preventDefault();
  calculadoraimc();
  bloquear();

});

function calculadoraimc(){

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const estatura = parseFloat(document.getElementById("estatura").value);

  const imc = (peso/(estatura*estatura));
  const resultadoIMC = imc.toFixed(2);



  let estado = "";
  let imagen = "";
  if (imc < 18.5){
      estado= "Bajo peso";
      imagen ="../img/flaco.jpg";
  }
  else if (imc <= 24.9 ){
    estado = "Peso normal" ;
    imagen = "../img/peso normal.jpg"
  }
  else if (imc <= 29.9){
    estado = "Peso normal a superior";
    image = "../img/gordito.jpg";
  }
  else {
    estado = "Obeso";
    imagen="../img/fat-man.jpg";
  }

document.getElementById("imc").innerHTML= `${resultadoIMC}: ${estado}`;
document.getElementById("imagen").src = imagen;



document.getElementById("bloquear").addEventListener("click",function(){
  bloquear();
  desbloquear();
});


function bloquear(){

  const formulario = document.getElementById("formulario");
  for (let input of formulario.elements ){
    input.disabled = true;
  }
  }
  window.bloquear = bloquear;




} 


  document.getElementById("desbloquear").addEventListener("click",function(){
    desbloquear();
});
  function desbloquear(){
    const formulario = document.getElementById("formulario");
    for (let input of formulario.elements ){
      input.disabled = false;
  }
}

window.desbloquear = desbloquear;





  function borrar() {
    document.getElementById("formulario").reset();
    document.getElementById("imc").innerHTML = "";
    document.getElementById("imagen").src = "";
    }
    
    window.calculadoraimc = calculadoraimc;
    window.borrar = borrar;
  
  
