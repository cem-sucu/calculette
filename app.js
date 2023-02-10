const touches = [...document.querySelectorAll(".bouton")];
const listKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
    const valeur = e.keyboardevent.code.toString();
    calculer(valeur);
});

document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

const calculer = (valeur) => {
    if (listKeycode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};
