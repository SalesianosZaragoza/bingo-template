({
    sacarBola : function(component, event, helper) {
        var action = component.get("c.numeroAleatorio");
        action.setCallback(this, function(response) {
            // obtengo el estado de la respuesta
            var state = response.getState();
            // si el estado es SUCCESS
            if (state === "SUCCESS") {
                // devuelve un numero aleatorio entre 1 y 100
                var bola = response.getReturnValue();
                // se lo asigno a la variable bola del componente
                component.find("bola").getElement().value = bola;
                // creo un evento y le paso el numero aleatorio
                var appevent =$A.get("e.c:Evento");
                // le paso el numero aleatorio
                appevent.setParams({"bola":bola});
                // dispara el evento
                appevent.fire();
            }
        
        });
        // sin esto no funciona y se pone al final del todo
        $A.enqueueAction(action);
        

    }
})
