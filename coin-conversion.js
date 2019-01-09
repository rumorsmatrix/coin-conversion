function redraw() {
	cp = parseInt(document.getElementById('cp').value);
	sp = parseInt(document.getElementById('sp').value);
	ep = parseInt(document.getElementById('ep').value);
	gp = parseInt(document.getElementById('gp').value);
	pp = parseInt(document.getElementById('pp').value);
	gp = convert_to_gp(cp, sp, ep, gp, pp);

	document.getElementById('gp_result_rounded').innerHTML = Math.round(gp).toLocaleString();
	document.getElementById('gp_result').innerHTML = parseFloat(gp.toFixed(6)).toLocaleString();
}


function convert_to_gp(cp, sp, ep, gp, pp) {
	if (isNaN(cp)) cp = 0;
	if (isNaN(sp)) sp = 0;
	if (isNaN(ep)) ep = 0;
	if (isNaN(gp)) gp = 0;
	if (isNaN(pp)) pp = 0;

	gp_result = (cp / 100) + (sp / 10) + (ep / 2) + (gp) + (pp * 10);
	return gp_result;
}
