/*
    ==================================================
    LABORATORIO DE COLOR RGB
    Archivo JavaScript
    ==================================================
*/


// ==================================================
// 1. CONTROLES RGB
// ==================================================

const red = document.getElementById("red");

const green = document.getElementById("green");

const blue = document.getElementById("blue");


// ==================================================
// 2. INPUTS NUMÉRICOS
// ==================================================

const redInput = document.getElementById("redInput");

const greenInput = document.getElementById("greenInput");

const blueInput = document.getElementById("blueInput");


// ==================================================
// 3. COLOR PICKER
// ==================================================

const colorPicker =
    document.getElementById("colorPicker");


// ==================================================
// 4. ELEMENTOS DE RESULTADO
// ==================================================

const colorPreview =
    document.getElementById("colorPreview");

const rgbValue =
    document.getElementById("rgbValue");

const hexValue =
    document.getElementById("hexValue");

const resetButton =
    document.getElementById("resetButton");


// ==================================================
// 5. VALIDAR COMPONENTE RGB
// ==================================================

function validarRGB(valor) {

    let numero = Number(valor);


    /*
        Si el valor no es válido,
        utilizamos 0.
    */

    if (isNaN(numero)) {

        numero = 0;

    }


    /*
        El valor mínimo es 0.
    */

    if (numero < 0) {

        numero = 0;

    }


    /*
        El valor máximo es 255.
    */

    if (numero > 255) {

        numero = 255;

    }


    /*
        Los componentes RGB
        deben ser números enteros.
    */

    return Math.round(numero);

}


// ==================================================
// 6. RGB → HEX
// ==================================================

function rgbToHex(r, g, b) {

    const redHex =
        Number(r)
            .toString(16)
            .padStart(2, "0");


    const greenHex =
        Number(g)
            .toString(16)
            .padStart(2, "0");


    const blueHex =
        Number(b)
            .toString(16)
            .padStart(2, "0");


    return (
        `#${redHex}${greenHex}${blueHex}`
    ).toUpperCase();

}


// ==================================================
// 7. HEX → RGB
// ==================================================

function hexToRgb(hex) {

    /*
        Eliminamos el símbolo #.
    */

    hex = hex.replace("#", "");


    /*
        Extraemos las parejas
        correspondientes a R, G y B.
    */

    const r = parseInt(
        hex.substring(0, 2),
        16
    );


    const g = parseInt(
        hex.substring(2, 4),
        16
    );


    const b = parseInt(
        hex.substring(4, 6),
        16
    );


    return {

        r: r,

        g: g,

        b: b

    };

}


// ==================================================
// 8. ACTUALIZAR COLOR
// ==================================================

function updateColor() {


    // ----------------------------------------------
    // Obtener valores RGB
    // ----------------------------------------------

    const r = validarRGB(red.value);

    const g = validarRGB(green.value);

    const b = validarRGB(blue.value);


    // ----------------------------------------------
    // Sincronizar inputs numéricos
    // ----------------------------------------------

    redInput.value = r;

    greenInput.value = g;

    blueInput.value = b;


    // ----------------------------------------------
    // Crear representación RGB
    // ----------------------------------------------

    const rgb =
        `rgb(${r}, ${g}, ${b})`;


    // ----------------------------------------------
    // Cambiar cuadro de color
    // ----------------------------------------------

    colorPreview.style.backgroundColor = rgb;


    // ----------------------------------------------
    // Mostrar RGB
    // ----------------------------------------------

    rgbValue.textContent = rgb;


    // ----------------------------------------------
    // Convertir RGB → HEX
    // ----------------------------------------------

    const hex =
        rgbToHex(r, g, b);


    // ----------------------------------------------
    // Mostrar HEX
    // ----------------------------------------------

    hexValue.textContent = hex;


    // ----------------------------------------------
    // Sincronizar Color Picker
    // ----------------------------------------------

    colorPicker.value = hex;

}


// ==================================================
// 9. CAMBIO EN SLIDER ROJO
// ==================================================

red.addEventListener(
    "input",
    function () {

        updateColor();

    }
);


// ==================================================
// 10. CAMBIO EN SLIDER VERDE
// ==================================================

green.addEventListener(
    "input",
    function () {

        updateColor();

    }
);


// ==================================================
// 11. CAMBIO EN SLIDER AZUL
// ==================================================

blue.addEventListener(
    "input",
    function () {

        updateColor();

    }
);


// ==================================================
// 12. CAMBIO EN INPUT NUMÉRICO ROJO
// ==================================================

redInput.addEventListener(
    "input",
    function () {

        const valor =
            validarRGB(redInput.value);


        red.value = valor;


        updateColor();

    }
);


// ==================================================
// 13. CAMBIO EN INPUT NUMÉRICO VERDE
// ==================================================

greenInput.addEventListener(
    "input",
    function () {

        const valor =
            validarRGB(greenInput.value);


        green.value = valor;


        updateColor();

    }
);


// ==================================================
// 14. CAMBIO EN INPUT NUMÉRICO AZUL
// ==================================================

blueInput.addEventListener(
    "input",
    function () {

        const valor =
            validarRGB(blueInput.value);


        blue.value = valor;


        updateColor();

    }
);


// ==================================================
// 15. CAMBIO EN COLOR PICKER
// ==================================================

colorPicker.addEventListener(
    "input",
    function () {


        /*
            Obtenemos el color hexadecimal
            seleccionado por el usuario.
        */

        const hex =
            colorPicker.value;


        /*
            Convertimos HEX → RGB.
        */

        const rgb =
            hexToRgb(hex);


        /*
            Actualizamos los sliders.
        */

        red.value = rgb.r;

        green.value = rgb.g;

        blue.value = rgb.b;


        /*
            Actualizamos toda la interfaz.
        */

        updateColor();

    }
);


// ==================================================
// 16. BOTÓN RESTABLECER
// ==================================================

resetButton.addEventListener(
    "click",
    function () {


        /*
            Color inicial:

            R = 128
            G = 128
            B = 128

            Resultado:

            RGB = 128,128,128
            HEX = #808080
        */

        red.value = 128;

        green.value = 128;

        blue.value = 128;


        /*
            Actualizar interfaz.
        */

        updateColor();

    }
);


// ==================================================
// 17. INICIALIZAR APLICACIÓN
// ==================================================

updateColor();
