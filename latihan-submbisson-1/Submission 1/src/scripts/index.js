import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menuToggle = document.querySelector('.menu-toggle, .menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',() => {
    nav.classList.toggle('slide');
});

// Fetch Data
import ('../DATA.json').then(({default: dataJSON}) => {
    console.log(dataJSON)
    let dataResto = dataJSON['restaurants']
    let dataCardResto = '';
    dataResto.forEach(data => {
        dataCardResto +=`
        <article tabindex="0" class="post-item" alt="Menu untuk melihat restoran">
            <img tabindex="0" class="post-item__thumbnail" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
                <div class="post-item__content">
                    <p tabindex="0" class="post-item__city">${data['city']}</p>
                    <p tabindex="0" class="post-item__date">Rating: <strong tabindex="0">${data['rating']}</strong></p>
                    <h1 tabindex="0" class="post-item__title"><a href="#">${data['name']}</a></h1>
                    <p tabindex="0" class="post-item__description">${data['description']}</p>
                </div>
        </article>
        `;
    });
    document.querySelector('#posting').innerHTML = dataCardResto;  
});