
var A = "A"
var C = "C"
var B = "B"
var moviments = 0
function movimentos(n, ori, aux, dest) {
    var resultado = "";
    if(n>=1){
        movimentos((n-1), ori, dest, aux );
        moviments ++;
        resultado +=("Movimento: "+ori+" -> "+dest+" ("+moviments+") ");
        //espaço += "<p>"+resultado+"</p>";
        document.forms["form-torre"]["msg"].value += resultado
         resultado = "";    
                movimentos((n-1), aux, ori, dest ); 
            }
            
        }
        function start(){
            moviments = 0
            document.forms["form-torre"]["msg"].value = ""
            var n = document.forms["form-torre"]["numero"].value
                movimentos(n, A, B, C);
        }