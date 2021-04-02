var jogador = 7;

 
  var coluna = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H'];
  var linha = ['1', '2', '3', '4','5', '6', '7', '8'];

  function myFunction(){

    if (jogador == 0){jogador = 7;} else {jogador=0;}
  
    document.getElementById("rei").src = "css/imgs/pecas/rei_"+jogador+".png"; 
    document.getElementById("rainha").src = "css/imgs/pecas/rainha_"+jogador+".png"; 
    document.getElementById("torre").src = "css/imgs/pecas/torre_"+jogador+".png"; 
    document.getElementById("bispo").src = "css/imgs/pecas/bispo_"+jogador+".png"; 
    document.getElementById("cavalho").src = "css/imgs/pecas/cavalho_"+jogador+".png"; 
    document.getElementById("peao").src = "css/imgs/pecas/peao_"+jogador+".png"; 
  }

  function myFunction2(){
   
    var tabuleiro  = document.createElement("tab");
  
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow();

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  // Add some text to the new cells:
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";

  }

  function tabuleiro(obj,e){


   

   
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position height the element.

    var valueX = (jogador == 0 ? 7 : 0) -  parseInt(x / (obj.offsetWidth / 8)) ; 
    var valueY = jogador - parseInt(y / (obj.offsetHeight / 8)) ;

    valueX = valueX < 0 ? valueX * -1 : valueX;
    valueY = valueY < 0 ? valueY * -1 : valueY;

    var value = coluna[valueX]+linha[valueY];
    document.getElementById("titulo").innerHTML = "X: " +e.pageX+ " | Y: "+e.pageY+ " | Width: "+ obj.offsetWidth + " | Height: "+ obj.offsetHeight + "valueX: "+valueX + " valueY: "+valueY + " value: "+value + " jogador: "+jogador;  
  }

  function mOver(e) {
   console.log( e.pageX);

 }

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
 }

