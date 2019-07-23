class Dropdown {
  constructor() {
    this.observeDropdowns();
  }

  observeDropdowns() {
    this.dropdowns.forEach(this.observeDropdown.bind(this));
  }

  observeDropdown(dropdown) {
    const toggle = dropdown.querySelector('[data-js="Dropdown.Toggle"]');
    toggle.addEventListener('click', this.toggleDropdown.bind(this, dropdown));
  }

  toggleDropdown(dropdown) {
    if (dropdown.getAttribute('disabled') !== null) {
      return;
    }
    const menu = dropdown.querySelector('[data-js="Dropdown.Menu"]');
    const menuState = (menu.getAttribute('aria-expanded') === 'true');
    this.toggleMenuState(menu, menuState);
    this.toggleIconState(dropdown, menuState);
  }

  toggleMenuState(menu, menuState) {
    menu.setAttribute('aria-expanded', !menuState);
  }

  toggleIconState(dropdown, state) {
    const icon = dropdown.querySelector('[data-js="Dropdown.Icon"]');
    if (state) {
      icon.classList.replace('fa-caret-left', 'fa-caret-down');
    } else {
      icon.classList.replace('fa-caret-down', 'fa-caret-left');
    }
  }

  get dropdowns() {
    return document.querySelectorAll('[data-js="Dropdown"]');
  }
}
