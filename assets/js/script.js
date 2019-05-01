$(function(){

    $("a").click(function(event){
        if(this.hash !== ""){
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          });
        }
      });

    $(".bujo").click(function(){
        var imagen = $(this).attr("src");
        var Titulo = $(this).attr("alt");
        if(imagen == null){
            alert("no hay imagen para mostrar");
        }else{
            $(".pegaImagen").attr("src",imagen);
            $(".pegaTitulo").text(Titulo);
            $("#modalDibujos").modal();
        }
    });
});