const params = new URLSearchParams(location.hash.slice(1));

const token = params.get("token");
if (token) {
	new QRCode(document.getElementById("qrcode"), { text: token, width: 180, height: 180 });
	const el = document.createElement("pre");
	el.innerHTML = token;
	document.body.appendChild(el);
}
