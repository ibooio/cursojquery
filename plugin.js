( function ($){
  var cadena='Hola';
  var mostrar= function(e){
    alert(e.text());
  }
  $.fn.t2= function(color) {
    this.css('color', color);
    mostrar(this);
    return this;
  };
  $.fn.t1= function(color) {
    this.css('background-color', color);
    mostrar(this);
    return this;
  };
}(jQuery));
