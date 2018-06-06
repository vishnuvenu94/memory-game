$(document).ready(function(){
  var app = {
    cards:["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb","fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb"],
    mem:[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
    gem:[],
    init:function(){

      app.shuffle(app.cards,app.mem);
      app.assign();
      app.select();
    },
    select:function(){
      $('.card').on('click',function(){
        $(this).addClass("open selected");

        app.check();
 });
    },
    assign :function(){
      $('.card').children().each(function(index){
        $(this).attr('data-cardvalue',app.mem[index]);
        $(this).addClass(app.cards[index]);
      });
    },

    shuffle:function(array,array2) {
        var currentIndex = array.length, temporaryValue, randomIndex,memarray,tempvalue;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            memarray =randomIndex;
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            tempvalue=array2[currentIndex];
            array[currentIndex] = array[randomIndex];
            array2[currentIndex]=array2[randomIndex];
            array[randomIndex] = temporaryValue;
            array2[randomIndex]= tempvalue;
        }

        return array;
        return array2;

      },
      child:function(){
        $('.card').each(function(index){
          $(this).children().addClass(app.cards[index]);

        });
  },

      check:function(){
        if($('.selected').length === 2){
          if($('.selected').first().children().data('cardvalue')===$('.selected').last().children().data('cardvalue')){


    $('.selected').each(function(){
         $(this).addClass('match');
          $(this).removeClass("open");
           });
  $('.selected').each(function(){
                $(this).removeClass("selected")

    });
       }
    else{
     setTimeout(function(){
                $('.selected').each(function(){
                    $(this).removeClass("open");
                    $(this).addClass("matchno");

                            
   });
    },1000);

  setTimeout(function(){
                          $('.selected').each(function(){
                      $(this).removeClass("selected");
                    $(this).removeClass("matchno");


  });

    },2000);

}
        }
        app.checkwin();
        
      },
      checkwin:function(){
        if($('.match').length === 16){
          $('.deck').html('<h1>CONGRATS!!! YOU WON THE GAME</h1><h3>Refresh The Page To Play Again!!</h3>');
        }
      }
  };
    app.init();

    });