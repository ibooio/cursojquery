(
  function($){
    var asignarEventos = function(caja, bgColor){
      $(caja).on({
        click: function(){
          $(this).css('color', 'yellow');
          //$(this).css('background-color', bgColor);
        },
        dblclick: function(){ $(this).remove();  },
        mouseenter: function(){ $(this).text($(this).data('burro')); },
        mouseleave: function(){ $(this).text(''); }
      });
    }

    $.fn.cajasLocas = function(params) {
      if(!params)
        params= {};
      params.numero= params.numero ? params.numero : 5;
      params.bgColor= params.bgColor ? params.bgColor : 'red';
      params.color= params.color ? params.color : 'black';

      for(var i=1; i<=params.numero; i++ ){
        var box= $('<div class="crazy-box" data-burro="hola">').appendTo(this);
      }
      asignarEventos($('.crazy-box', params.bgColor));
      $('.crazy-box').css(
        {
          width: '100px',
          lineHeight: '100px',
          textAlign: 'center',
          height: '100px',
          border: '1px solid #111',
          float: 'left',
          margin: '2px'
        }
      );
/*      $(this).css({
        color: params.color,
        backgroundColor: params.backgroundColor
      });
*/
//        this.css( "color", "red" ).css( "background-color", "black" );
    };
  }
(jQuery));
