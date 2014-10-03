// based on the marble method (which is supposedly mathematically similiar to the yarrow stalk method).
// using randomClass made by fredibach.ch [atm]
// there are many reasons why this form of divination has survived to the present day. i'm making use of what has been described as "idiot buttons" - i.e loading times when no loading time is needed. by meditating on the question the user poses to the Oracle (lol) it focuses their mind on the issue at stake - so that when they read the text their perception reads what is relevent to the issue.
// changing lines next!

$(function() {
	
var lines = [ "yang", "yang", "yang", "yang", "yang", "yin", "yin", "yin", "yin", "yin", "yin", "yin", "yangC", "yangC", "yangC", "yinC" ];

$("button.hex").click(function() {
  $("#hexagram span").randomClass(lines);
  $(this).hide();
  $("button.reset").show();
  if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex1").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex2").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex3").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex4").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex5").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex6").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex7").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex8").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex9").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex10").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex11").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex12").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex13").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex14").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex15").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex16").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex17").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex18").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yang") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yang") )
{
  $("#hex19").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex20").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex21").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex22").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex23").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex24").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex25").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex26").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex27").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex28").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex29").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex30").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex31").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex32").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex33").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex34").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex35").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex36").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex37").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex38").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex39").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex40").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex41").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex42").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex43").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex44").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex45").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex46").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex47").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex48").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex49").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex50").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex51").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex52").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex53").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex54").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex55").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex56").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{
  $("#hex57").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{
  $("#hex58").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{  
  $("#hex59").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{  
  $("#hex60").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{  
  $("#hex61").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{  
  $("#hex62").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yin") || $(".line1").hasClass("yinC") )
  if ( $(".line2").hasClass("yang") || $(".line2").hasClass("yangC") )
    if ( $(".line3").hasClass("yin") || $(".line3").hasClass("yinC")  )
      if ( $(".line4").hasClass("yang") || $(".line4").hasClass("yangC") )
		if ( $(".line5").hasClass("yin") || $(".line5").hasClass("yinC") )
			if ( $(".line6").hasClass("yang") || $(".line6").hasClass("yangC") )
{  
  $("#hex63").show().css('display', 'inline-block');
}

if ($(".line1").hasClass("yang") || $(".line1").hasClass("yangC") )
  if ( $(".line2").hasClass("yin") || $(".line2").hasClass("yinC") )
    if ( $(".line3").hasClass("yang") || $(".line3").hasClass("yangC")  )
      if ( $(".line4").hasClass("yin") || $(".line4").hasClass("yinC") )
		if ( $(".line5").hasClass("yang") || $(".line5").hasClass("yangC") )
			if ( $(".line6").hasClass("yin") || $(".line6").hasClass("yinC") )
{  
  $("#hex64").show().css('display', 'inline-block');
}



});

$("button.reset").click(function() {
  $("#hexagram span").removeClass("yang");
  $("#hexagram span").removeClass("yin");
  $("#hexagram span").removeClass("yangC");
  $("#hexagram span").removeClass("yinC");
  $(this).hide();
  $("button.hex").show();
  $(".result").hide();
});

$("#about").click(function() {
  $("#info").toggle();
});

});
