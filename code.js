const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(error){
        console.log(error);
        document.getElementById('output').textContent="Arquivo não localizado";
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}
    function clickNumberButton(){

        number = document.getElementById("inputnumber").value

        try{
            if (number == '') throw 'Informe um valor'

            else if ( (number<5) || (number>10) ) throw 'Informe um valor maior que 5 e menor que 10' 
        }

        catch(erro){

           document.getElementById("outputnumber").innerHTML = erro
           if (erro == 'Informe um valor maior que 5 e menor que 10' || erro == 'Informe um valor')  throw 'Erro + erro javascript'

            }

        finally {
                alert('O número escolhido foi ' + number)  
        }
    }

    

