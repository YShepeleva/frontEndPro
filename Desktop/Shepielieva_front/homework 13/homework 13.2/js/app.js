const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      // const category = getCategoryById(categoryId);
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      // console.log(category);
      showProductsByCategory(category);

    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);

    // element.addEventListener('click', () => {
    //   console.log(category);
    // });

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
}

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = category => {
  // const { products } = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) {
    return;
  }

  parent.innerHTML = '';

  const productsList = document.createElement('ul');

  productsList.addEventListener('click', event => {
    if (event.target &&
      event.target.tagName === 'LI' &&
      event.target.productData
    ) {
      console.log(event.target);
      const categoryId = event.target.getAttribute('data-category');
      const productId = event.target.getAttribute('data-product')

      //third coloum 
      const product = event.target.productData;
      const details = document.querySelector('.info');
      details.innerHTML = `${product.name}<br>$${product.price}<br>${product.description}`;

      //btn buy now
      const buttonBuy = document.createElement('button')
      buttonBuy.textContent = 'buy now!';
      buttonBuy.classList.add('btn-buy');
      details.append(buttonBuy);

      //go to do order
      buttonBuy.addEventListener('click', () => {
        window.location.href = 'info_for_order.html';
      });
    }
  });

  products.forEach(product => {
    const element = document.createElement('li');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category.id);

    element.productData = product;

    productsList.appendChild(element);
  });
  parent.appendChild(productsList);
}

showCategories();



