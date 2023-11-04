
let created = false;

function createButtons(parentEl) {
    console.log("createButtons", parentEl);
    created = true;

    let b = document.createElement("a");
    b.className = "btn btn-primary";
    b.innerText = "Login with Github";
    b.href = "/oauth-login/github";
    parentEl.append(b);

    b = document.createElement("a");
    b.className = "btn btn-primary";
    b.innerText = "Login with ContentDB";
    b.href = "/oauth-login/cdb";
    parentEl.append(b);
}

function findButtonContainer() {
    const elements = document.getElementsByClassName("btn-secondary");
    for (let i=0; i<elements.length; i++) {
        let el = elements[i];
        if (el.type == "submit") {
            return el.parentElement;
        }
    }
}

// dirty hack to inject login-buttons until we have proper oauth support (let me know if you have a better idea ¯\_(ツ)_/¯)
function checkLoginpage() {
    if (location.pathname != "/login") {
        created = false;
        // not on the login page
        return;
    }

    if (created) {
        // already created
        return;
    }

    const c = findButtonContainer();
    if (c) {
        createButtons(c);
    }
}

document.addEventListener("DOMContentLoaded", checkLoginpage);
window.addEventListener("click", checkLoginpage);
