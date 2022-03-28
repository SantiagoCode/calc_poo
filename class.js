class Calculadora {
    constructor(){
        this.btn_calcular = document.getElementById('btn_calc');
        this.cambio = document.getElementById("operador");
        this.tercer_cuadro = document.querySelector(".resultados");
        this.operacion = document.getElementById('actualizar');
        this.contador = 1;
        this.last_value;
        this.txt_resultados;
        this.btn_space;
        this.result;
    }
    
    // aqui actualizamos los valores de X y Y
    calcular = () => {
        var x = parseInt( document.getElementById('x').value );
        var y = parseInt( document.getElementById('y').value );

        this.operar(x,y);
    }


    // aqui identificamos si es uns suma o resta
    operar = (x,y) => {
        switch (this.cambio.value) {
            case "+":
                this.result = x + y;
            break;
            case "-":
                this.result = x - y;
            break;
            case "x":
                this.result = x * y;
            break;
            case "/":
                this.result = x / y;
            break;
            default:
        }

        this.historial(x,y);

    }

    // aqui creamos un historial de operaciones
    historial = (x, y) => {
        if(this.contador == 1){
            this.tercer_cuadro.innerHTML = 
            "<h2>Resultados: </h2> <p id='contenedor_resultados'></p> <p id='btn_space'></p>";

            this.txt_resultados = document.getElementById('contenedor_resultados');
            this.btn_space = document.getElementById("btn_space");
        }

        this.txt_resultados.innerHTML +=
        "<strong> Operacion " + this.contador + ":</strong> <br />" +
        x + " " + this.cambio.value + " " + y + " = " + this.result + "<br />";

        this.last_value = this.result;

        this.contador++;

        this.btn_space.innerHTML =
        "<button class='select act' type='button' name='button'>Usar último valor</button>"

        this.btn_space.addEventListener("click", this.reusar);
    }

    
    // Asi actualizarmos el operador en la interfaz
    actualizar = () => {
        this.operacion.innerHTML = this.cambio.value;
    }


    // asi permitimos continuar el calculo
    reusar = () => {
        x.value = parseInt(this.last_value);
        y.value = 0;
    }
}