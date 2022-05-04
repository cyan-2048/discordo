let a = new URL(location.href);
let token = a.searchParams.get("token");
if (token) {
	new QRCode(document.getElementById("qrcode"), {
		text: token,
		width: 180,
		height: 180,
	});
	let el = document.createElement("pre");
	el.innerHTML = token;
	document.body.appendChild(el);
}
