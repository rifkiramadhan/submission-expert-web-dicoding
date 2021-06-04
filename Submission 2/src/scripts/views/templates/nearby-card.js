import CONFIG from '../../global/config';

const nearbyCard = (dataResto) => `
    <article tabindex="0" class="post-item" alt="Menu untuk melihat restoran">
      <img tabindex="0" class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + dataResto.pictureId}" 
      alt="${dataResto.name}" title="${dataResto.name}">
        <div class="post-item__content">
            <p tabindex="0" class="post-item__city">${dataResto.city}</p>
            <p tabindex="0" class="post-item__date"><i title="ratings" class="fas fa-star icon-primary"></i> <strong tabindex="0">${dataResto.rating}</strong></p>
            <h1 tabindex="0" class="post-item__title"><a href="#/resto/${dataResto.id}">${dataResto.name}</a></h1>
            <p tabindex="0" class="post-item__description">${dataResto.description}</p>
        </div>
    </article>
  `;

export default nearbyCard;
