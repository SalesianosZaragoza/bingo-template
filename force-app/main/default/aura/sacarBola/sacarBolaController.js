({
    sacarBola : function(component, event, helper) {
        var action = component.get("c.numeroAleatorio");
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            if (state === "SUCCESS") {
                var bola = response.getReturnValue();
                component.find("bola").getElement().value = bola;
                var appevent =$A.get("e.c:Evento");
                appevent.setParams({"bola":bola});
                appevent.fire();
            }
        
        });
        $A.enqueueAction(action);
        

    }
})
