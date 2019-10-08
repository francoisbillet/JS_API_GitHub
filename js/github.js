var infosElt = document.getElementById("infos");

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function(e) {
	ajaxGet("http://api.github.com/users/" + formElt.elements.pseudo.value, function(response) {
		var infos = JSON.parse(response);
		
		infosElt.innerHTML = "";

		var avatarElt = document.createElement("img");
		avatarElt.src = infos.avatar_url;
		avatarElt.style.width = "200px";

		var nomElt = document.createElement("div");
		nomElt.textContent = infos.name;

		var employeurElt = document.createElement("div");
		employeurElt.textContent = infos.company;

		var lienElt = document.createElement("a");
		lienElt.href = infos.blog;
		lienElt.textContent = infos.blog;

		infosElt.appendChild(avatarElt);
		infosElt.appendChild(nomElt);
		infosElt.appendChild(employeurElt);
		infosElt.appendChild(lienElt);
	});
	e.preventDefault();
});