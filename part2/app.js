const data = [
  "List 1",
  "List 2"
];
(function () {
  class DropDown {
    constructor() {
      this.data = [];
      this.active = null;
      this.open = false;
    }
    setData(data) {
      if (data.length) {
        this.data = data;
        this.active = data[0];
      }
      UI.init();
    }
    setActive(id) {
      this.active = id;
      this.open = false;
      UI.updateButtonText();
      UI.toggleDropDown();
    }
    toggleOpen(open) {
      this.open = open;
      UI.toggleDropDown();
    }
  }
  class UI {
    static init() {
      // populate li items heres
      const html = dropDown.data.map(item => `<li>${item}</li>`);
      document.querySelector(".dropdown>ul").innerHTML = html.join('');
    }
    static updateButtonText() {
      document.querySelector(".dropdown>button").innerHTML = dropDown.active;
    }
    static toggleDropDown() {
      const el = document.querySelector(".dropdown>ul");
      if (!dropDown.open) {
        el.className = '';
      } else {
        el.className = "open"
        el.focus();
      }
    }
  }
  const dropDown = new DropDown();
  document.addEventListener('DOMContentLoaded', () => {
    dropDown.setData(data);
  });
  document.querySelector(".dropdown>ul").addEventListener('blur', (e) => {
    dropDown.toggleOpen(false);
  });
  document.querySelector(".dropdown").addEventListener('click', (e) => {
    const el = e.target;
    if ((el.tagName + '').toLowerCase() === 'li') {
      dropDown.setActive(el.innerText);
    } else if ((el.tagName + '').toLowerCase() === 'button') {
      dropDown.toggleOpen(!dropDown.open);
    } else {
      dropDown.toggleOpen(false);
    }
  });
})();