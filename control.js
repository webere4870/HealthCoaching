
$("#slideshow > div:gt(0)").hide();
$('.overCard').hover((evt)=>
{
  
})
setInterval(function() { 
  $('.slide:first')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .end()
  .appendTo('#slideshow');
}, 6000);

$(document).ready(()=>
{
  $('.mobileToggle').click(function(){
    let height = $('nav').css("height")
    console.log(height)
    if(height == "75px")
    {
      $('nav').animate({height: "100vh"}, 300);
    }
    else
    {
      $('nav').animate({height: "75px"}, 300);
    }
  });
})

setInterval(()=>
{
  if(window.scrollY > 0 || location.href.includes('about') || location.href.includes('live'))
  {
    $('nav').attr("class", "sticky")
  }
  else
  {
    $('nav').attr("class", "")
  }
}, 200)

