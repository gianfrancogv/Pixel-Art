var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Funciones que generan la paleta de colores y crean la grilla de pixels;

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

function generarPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor = nombreColores[i];
    nuevoElemento.className = "color-paleta";
    paleta.appendChild(nuevoElemento);
  }
}

function crearGrilla() {
  for (var i = 0; i < 1750; i++) {
    var nuevoElemento = document.createElement("div");
    grillaPixeles.appendChild(nuevoElemento);
  }
}

generarPaleta();
crearGrilla();

// jQuery:

$(document).ready(function(){

  var $pixeles = $("#grilla-pixeles div");

  //Seleccionar color de la paleta para el indicador de color:

  $(".color-paleta").click(function(){
    var $colorSeleccionado = $(this).css("background-color");
    $("#indicador-de-color").animate({"background-color": $colorSeleccionado});
    
    //Variable que valida si el mouse está presionado o no, para pintar en movimiento:
    var $mousePresionado = false;
    $(document).mousedown(function(){
      $mousePresionado = true;
    }).mouseup(function(){
      $mousePresionado = false;  
    });

    //Funcion que detecta que el mouse sale del pixel para pintar el siguiente:
    $($pixeles).mousedown(function(){
      $(this).css("background-color", $colorSeleccionado);
    }).mouseenter(function(){
      if($mousePresionado) {
        $(this).css("background-color", $colorSeleccionado);
      };
    });

  });
  
  //Borrar pantalla con animación:
  $("#borrar").click(function(){
      $($pixeles).animate({"background-color": "white"}, 1000);      
  });

});

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual


  })
);
