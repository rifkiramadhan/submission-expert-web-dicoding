import NearbySource from '../data/resto-source';

const PostReview = async (url, name, review) => {
  const inputFormReview = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const postCardReview = `
    <div class="detail-review-list">
        <p class="review-name">${name}</p>
        <p class="review-date">${date}</p>
      <div class="review-body">
        <p>${review}</p>
      </div>
    </div>
  `;

  // POST Card Review
  const reviewResponse = await NearbySource.postRestaurantReview(inputFormReview);
  console.log(
    '📩 Post review berhasil dijalankan',
    reviewResponse,
  );

  // Append postCardReview to the review container
  reviewContainer.innerHTML += postCardReview;
};

export default PostReview;
