function displayReviews() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  reviews.forEach(review => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${review.productName}</strong>: ${review.reviewText} <button onclick="deleteReview('${review.productName}', '${review.reviewText}')">Удалить</button>`;
    productList.appendChild(listItem);
  });
}

function deleteReview(productName, reviewText) {
  let reviews = JSON.parse(localStorage.getItem('reviews'));

  reviews = reviews.filter(review => !(review.productName === productName && review.reviewText === reviewText));

  localStorage.setItem('reviews', JSON.stringify(reviews));
  displayReviews();
}

displayReviews();
