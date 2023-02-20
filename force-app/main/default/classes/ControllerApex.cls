public with sharing class ControllerApex {
    @AuraEnabled
    public static Integer numeroAleatorio(){
        Integer numeroAleatorio = Integer.valueof((1 + Math.random() * 90));
        return numeroAleatorio;
    }
    @AuraEnabled
    public static List<Integer> carton(){
        List<Integer> lista = new List<Integer>();

        for (Integer i = 1; i <= 90; i++) {
            lista.add(i);
        }

        Double numeroAleatorio = Math.random(); 
        Integer longitud = lista.size(); 
        Integer indiceAleatorio = (numeroAleatorio *(longitud-1)).intValue(); 
        return lista;
    }
}
