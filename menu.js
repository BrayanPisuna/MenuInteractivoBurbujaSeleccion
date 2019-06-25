var arreglo123 = [] ;

function menuPrincipal()
{
  
   var n = parseInt(prompt("ingrese el tamaño"));
    do{

    /*var se utiliza para declara una variable inicializando con un valor*/
    var  menu = parseInt (prompt(
        `INGRESE LA OPCION REQUERIDA:
        1.- PARA INGRESAR LOS ELEMENTOS
        2.- PARA MOSTRAR LOS ELEMENTOS
        3.- ORDENAR
        4.- DE MAYOR A MENOR ELEMENTO
        5.- SALIR
    `))
    /*console.log(menu);*/

        switch(menu)
        {
 
         case 1:
             console.log("BIENVENIDO CASO 1");
             ingresarElementos(arreglo123,n);

             break;
         case 2:
                 console.log("BIENVENIDO CASO 2");
                 console.log(arreglo123);
             break;
         case 3:
             console.log("BIENVENIDO CASO 3");
             var orden = parseInt(prompt
            (`INGRESE LA OPCION REQUERIDA:
        1.- ORDANAMIENTO METODO BURBUJA
        2.- ORDANAMIENTO METODO SELECCION
            `))

             switch(orden)
             {
                case 1:
                console.log("METODO BURBUJA");
                var t= arreglo123.length;
                Burbuja(arreglo123,t);
                console.log(arreglo123);

                break;

                case 2:
                console.log("METODO SELECCION");
                var t = arreglo123.length;
                Seleccion(arreglo123,t);
                console.log(arreglo123);

                break; 
             }
             break;
         case 4:
         console.log("BIENVENIDO CASO 4");
         mayorMenor(arreglo123,n);

             break;
         case 5:
                    console.log("ADIOS");
                    
              break;  
         default:
             Console.log("OPCION INCORRECTA");
             break;
     }

    } while(menu != 5) ;
    
    }

menuPrincipal();

function ingresarElementos(arreglo , n)
{

    for (var i= 0 ; i<n; i++){
        var datos = parseInt(prompt("INGRESAR LOS ELEMENTOS"));
        arreglo[i]= datos;

    }
}

function Burbuja (arreglo, n){
    
 var i, k, aux
 for ( k=1 ; k<n ; k++){
     for (i = 0; i< (n-k); i++){
         if (arreglo [i]> arreglo[i+1]){
             aux = arreglo [i];
             arreglo[i]=arreglo[i+1];
             arreglo[i+1]= aux;


         }

     }
 }
}

function Seleccion(arreglo, n){
 
var i,j,aux;

 for( i = 0; i< n ; i++){


        for( j=i+1; j<n; j++ ) 
        {

            if (arreglo[i] > arreglo[j])
            {
                aux = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }

}

function mayorMenor(arreglo, n){

    var mayor =0;
    var menor =0;
     for (var i =0;i<n;i++){
        if (arreglo[i] > mayor)
            {
                mayor = arreglo[i];
            }


     }
 menor = mayor;
  for (var i =0;i<n;i++){
        if (arreglo[i] < mayor)
            {
                menor = arreglo[i];
            }
     }

console.log("El numero menor es: "+ menor);
console.log("El numero mayor es: "+ mayor);
}