var button_audio=new Audio("https://awiclass.monoame.com/ballsound/click14.wav");

$(".i6").click(
  function(){
    $(".phone").css("width","");
    $(".screen").css("height","");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);


$(".i6s").click(
  function(){
    $(".phone").css("width","250px");
    $(".screen").css("height","400px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i7").click(
  function(){
    $(".phone").css("width","270px");
    $(".screen").css("height","420px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i8").click(
  function(){
    $(".phone").css("width","300px");
    $(".screen").css("height","460px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

var screen_audio=new Audio("https://awiclass.monoame.com/ballsound/click18.wav");
var page=0;
$(".screen").click(function(){
  page+=1;
  if(page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%");
  screen_audio.play();
});

var backhome_audio=new Audio("https://awiclass.monoame.com/ballsound/click12.wav");
$(".button").click(function(){
  page=0;
  $(".pages").css("left","-"+page*100+"%");
  backhome_audio.play();
});

$(".turn").click(function(){
  $(".phone").css("transform","rotate(360deg)");
});

$(".wiggle").click(function(){
  wiggletime=0;
  wiggle_audio.play();
});


var wiggle_audio=new Audio("https://awiclass.monoame.com/ballsound/phonevi.mp3");
var wiggletime=21;
setInterval(function(){
  if (wiggletime<=20){
    wiggletime+=1;
    console.log(wiggletime);
    if (wiggletime%2==0){
      $(".phone").css("left","-30px");
    }else{
      $(".phone").css("left","30px");
    }
    
    if (wiggletime==21){
       $(".phone").css("left","");
    }
    
  }
},60);


