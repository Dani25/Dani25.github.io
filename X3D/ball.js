setInterval(deseneaza,30);
var y = 0;
function deseneaza()
{
	var t = document.getElementById("id_transform");
	t.setAttribute("translation", "0 " + y + " 0");
	y++;
}