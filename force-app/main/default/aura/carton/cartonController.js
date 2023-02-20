({
    comparar : function(component, event, helper) {
        // obtengo el numero aleatorio
        var bola = event.getParam("bola");
        // obtengo el carton
        var carton = component.find("carton").getElement();
        var contador1 = 0;
        var contador2 = 0;
        var contador3 = 0;
        var linea = document.getElementById("linea");
        var dobleLinea = document.getElementById("dobleLinea");
        var bingo = document.getElementById("bingo");
        // recorro el carton y si el numero aleatorio coincide con alguno del carton lo pongo en X
        for (var i = 0; i < carton.getElementsByTagName("tr").length; i++) {
            for (var j = 0; j < carton.getElementsByTagName("tr")[i].getElementsByTagName("td").length; j++) {
                // si el numero aleatorio coincide con alguno del carton lo pongo en X
                if(carton.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML == bola)
                    carton.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = "X"
            }
        }
        // recorro el carton y si hay 5 X en una linea pongo el input de linea en visible
        for (var j = 0; j < carton.getElementsByTagName("tr")[0].getElementsByTagName("td").length; j++){
            if(carton.getElementsByTagName("tr")[0].getElementsByTagName("td")[j].innerHTML == "X"){
               contador1++; 
            }
        }
        // si hay 5 X en una linea pongo el input de linea en visible
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
        // si hay 5 X en dos lineas pongo el input de doble linea en visible
        if(contador1 == 5 && contador2 == 5 || contador1 == 5 && contador3 == 5){
            document.getElementById('dobleLinea').value = 'DOBLE LINEA';
            dobleLinea.type= "text";
        }
        // si hay 5 X en tres lineas pongo el input de bingo en visible
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
