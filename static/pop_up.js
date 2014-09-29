var popup_dragging = false;
var popup_target;
var popup_mouseX;
var popup_mouseY;
var popup_mouseposX;
var popup_mouseposY;
var popup_oldfunction;
function popup_display(x)
{
  var win = window.open();
  for (var i in x) win.document.write(i+' = '+x[i]+'<br>');
}
function popup_mousedown(e)
{
  var ie = navigator.appName == "Microsoft Internet Explorer";
  if ( ie  &&  window.event.button != 1) return;
  if (!ie  &&  e.button            != 0) return;
  popup_dragging = true;
  popup_target   = this['target'];
  popup_mouseX   = ie ? window.event.clientX : e.clientX;
  popup_mouseY   = ie ? window.event.clientY : e.clientY;
  if (ie)
       popup_oldfunction = document.onselectstart;
  else popup_oldfunction  = document.onmousedown;
  if (ie)
       document.onselectstart = new Function("return false;");
  else document.onmousedown   = new Function("return false;");
}

function popup_mouseup(e)
{
  if (!popup_dragging) return;
  popup_dragging = false;
  var ie = navigator.appName == "Microsoft Internet Explorer";
  var element = document.getElementById(popup_target);
  if (ie)
       document.onselectstart = popup_oldfunction;
  else document.onmousedown   = popup_oldfunction;
}
function popup_exit(e)
{
  var ie = navigator.appName == "Microsoft Internet Explorer";
  var element = document.getElementById(popup_target);
  popup_mouseup(e);
  element.style.visibility = 'hidden';
  element.style.display    = 'none';
}
function popup_show()
{
  element      = document.getElementById('popup');
  drag_element = document.getElementById('popup_drag');
  exit_element = document.getElementById('popup_exit');
  element.style.position   = "absolute";
  element.style.visibility = "visible";
  element.style.display    = "block";
//    element.style.left = (document.documentElement.scrollLeft+popup_mouseposX-500)+'px';
//    element.style.top  = (document.documentElement.scrollTop +popup_mouseposY+15)+'px';
  drag_element['target']   = 'popup';
  drag_element.onmousedown = popup_mousedown;
  exit_element.onclick     = popup_exit;
}