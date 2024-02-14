function addReview() {
  const productName = document.getElementById('productName').value;
  const reviewText = document.getElementById('reviewText').value;

  if (productName && reviewText) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ productName, reviewText });
    localStorage.setItem('reviews', JSON.stringify(reviews)); // Записываем данные в localStorage

    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';

    alert('Отзыв успешно добавлен!');
  } else {
    alert('Пожалуйста, введите название продукта и текст отзыва.');
  }
}
