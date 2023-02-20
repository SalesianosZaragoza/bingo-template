({
    comparar : function(component, event, helper) {
        var bola = event.getParam("bola");
        var carton = component.find("carton").getElement();
        var contador1 = 0;
        var contador2 = 0;
        var contador3 = 0;
        var linea = document.getElementById("linea");
        var dobleLinea = document.getElementById("dobleLinea");
        var bingo = document.getElementById("bingo");

        for (var i = 0; i < carton.getElementsByTagName("tr").length; i++) {
            for (var j = 0; j < carton.getElementsByTagName("tr")[i].getElementsByTagName("td").length; j++) {

                if(carton.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML == bola)
                    carton.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = "X"
            }
        }
        for (var j = 0; j < carton.getElementsByTagName("tr")[0].getElementsByTagName("td").length; j++){
            if(carton.getElementsByTagName("tr")[0].getElementsByTagName("td")[j].innerHTML == "X"){
               contador1++; 
            }
        }
        if(contador1 == 5){
            document.getElementById('linea').value = 'LINEA';
            linea.type= "text";
        }

        for (var j = 0; j < carton.getElementsByTagName("tr")[1].getElementsByTagName("td").length; j++){
            if(carton.getElementsByTagName("tr")[1].getElementsByTagName("td")[j].innerHTML == "X"){
                contador2++; 
            }
        }
        if(contador2 == 5){
            document.getElementById('linea').value = 'LINEA';
            linea.type= "text";
        }

        for (var j = 0; j < carton.getElementsByTagName("tr")[2].getElementsByTagName("td").length; j++){
            if(carton.getElementsByTagName("tr")[2].getElementsByTagName("td")[j].innerHTML == "X"){
                contador3++; 
            }
        }
        if(contador3 == 5){
            document.getElementById('linea').value = 'LINEA';
            linea.type= "text";
        }

        if(contador1 == 5 && contador2 == 5 || contador1 == 5 && contador3 == 5){
            document.getElementById('dobleLinea').value = 'DOBLE LINEA';
            dobleLinea.type= "text";
        }

        if(contador1 == 5 && contador2 == 5 && contador3 == 5){
            document.getElementById('bingo').value = 'BINGO';
            bingo.type= "text";
        }
    },
    init: function(component, event, helper) {

        //SIN ACABAR

        var carton = component.find("carton").getElement();
        var action = component.get("c.carton");
        var indice = 1;
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();

                for (var i = 0; i < carton.getElementsByTagName("tr").length; i++) {
                    for (var j = 0; j < carton.getElementsByTagName("tr")[i].getElementsByTagName("td").length; j++) {
                        carton.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = result.get(indice);
                        indice++;
                    }
                }
            }
        });
        $A.enqueueAction(action);
    }
})
