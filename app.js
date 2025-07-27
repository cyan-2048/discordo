(() => {
  const qrcode = document.getElementById("qrcode");
  const root = document.getElementById("root");

  function render() {
    root.innerHTML = qrcode.innerHTML = "";

    const params = new URLSearchParams(location.hash.slice(1));

    const token = params.get("token");
    if (token) {
      const el = document.createElement("pre");
      el.innerText = token;
      root.appendChild(el);

      new QRCode(qrcode, { text: token, width: 180, height: 180 });
    }
  }

  render();

  window.onhashchange = render;
})();
