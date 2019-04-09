

function printLoading(c) {
    var canvas = document.getElementById(c);
    var context = canvas.getContext("2d");

    context.fillStyle = "#808080";
    context.fillRect(0, 0, 1000, 485);
    context.fillStyle = "#FFFFFF";
    context.font = "13pt Patrick Hand";
    context.fillText("CARREGANDO A PÁGINA...", 10, 30);
}
function GerarPaginasDoLivro() {
    var nameUP = nome.toUpperCase();
    //If text was deleted use JULIA insted
    if (nameUP=="") nameUP="JULIA";

    //Name using upper + lower carousel
    var nameArray = nameUP.split(" ");
    var nameLC = "";

    for (i=0; i<nameArray.length; ++i) {
      nameLC = nameLC + nameArray[i].charAt( 0 ).toUpperCase() + nameArray[i].substr( 1 ).toLowerCase() + " ";
    }

    
    var image1 = document.getElementById("pg01"); 
    var canvas1 = document.createElement("canvas");
    canvas1.width = image1.width;
    canvas1.height = image1.height;
    var context1 = canvas1.getContext("2d");
    context1.drawImage(image1, 0, 0);
    context1.fillStyle="#000000";
    context1.font = "13pt Patrick Hand";
    context1.fillText("MEU NOME É PAPEL", 500+125, 45);
    context1.fillText("PODERIA SER MIGUEL OU RAFAEL.", 500+125, 65);
    context1.fillText("OU QUEM SABE MARIBEL?", 500+125, 85);

    context1.fillText("MAS É PAPEL E SE ESCREVE", 500+275, 370);
    context1.fillText("COM ESTAS LETRAS:", 500+275, 390);
    context1.font = "15pt Patrick Hand";
    context1.fillText("P  A  P  E  L", 500+316, 415);

    image1.src = canvas1.toDataURL("image/png");

    return;


    var image2 = document.getElementById("pg02_03"); 
    var canvas2 = document.createElement("canvas");
    canvas2.width = image2.width;
    canvas2.height = image2.height;
    var context2 = canvas2.getContext("2d");
    context2.drawImage(image2, 0, 0);
    context2.fillStyle="#000000";
    context2.font = "13pt Patrick Hand";
    context2.fillText("HOJE ESTOU UM POUCO TRISTE.", 40, 45);
    context2.fillText("SOU UMA FOLHA EM BRANCO, SEM NINGUÉM", 40, 65);
    context2.fillText("QUE ME RABISQUE.", 40, 85);

    image2.src = canvas2.toDataURL("image/png");

}