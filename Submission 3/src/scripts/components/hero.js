class CardHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="jumbotron__text">
        <img tabindex="0" src="./images/logo-brand-400.jpg" alt="Gambar logo Nearby Resto"></img>
        <h1 tabindex="0" class="jumbotron__title">Selamat datang di Nearby Resto</h1>

        <p tabindex="0" class="jumbotron__subtitle">
          Silahkan pilih restaurant terdekat Anda
        </p>
        <div class="wrapper">
          <button tabindex="0" onclick="window.location.href='#main-content'" class="button-active">
            <span>Cari Restaurant</span>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-jumbotron', CardHero);
