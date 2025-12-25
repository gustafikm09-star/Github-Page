class MyMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="menu">
                <a href="index.html" class="menu_button">Martin Guštafík</a>
                
                <input type="checkbox" id="menu-toggle" class="menu-checkbox">
                <label for="menu-toggle" class="hamburger">&#9776;</label>

                <div class="menu_options">
                    <a href="Projects.html" class="menu_button">Projects</a>
                    <a href="Sites.html" class="menu_button">Sites</a>
                    <a href="About_Myself.html" class="menu_button">About myself</a>
                </div>
            </div>
        `;
    }
}
customElements.define('my-menu', MyMenu);