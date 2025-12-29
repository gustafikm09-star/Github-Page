class MyMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="menu">
                <a href="index.html" class="menu_button">Martin Guštafík</a>
                
                <input type="checkbox" id="menu-toggle" class="menu-checkbox">
                <label for="menu-toggle" class="hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </label>

                <div class="menu_options">
                    <a href="projects.html" class="menu_button">Projects</a>
                    <a href="sites.html" class="menu_button">Sites</a>
                    <a href="about_myself.html" class="menu_button">About myself</a>
                </div>
            </div>
        `;
    }
}
customElements.define('my-menu', MyMenu);