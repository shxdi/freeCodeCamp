const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const complaintsInputs = document.querySelectorAll('#complaints-group input');
const otherComplaint = document.getElementById('other-complaint');
const complaintDescription = document.getElementById('complaint-description');
const solutionsGroup = document.getElementById('solutions-group');
const solutionsInputs = document.querySelectorAll('#solutions-group input');
const otherSolution = document.getElementById('other-solution');
const solutionDescription = document.getElementById('solution-description');
const form = document.getElementById('form');

function validateForm() {
  const isValidObj = {
    'full-name': false,
    email: false,
    'order-no': false,
    'product-code': false,
    quantity: false,
    'complaints-group': false,
    'complaint-description': true,
    'solutions-group': false,
    'solution-description': true,
  };

  // Valid testing
  if (/\w+/.test(fullName.value)) {
    isValidObj['full-name'] = true;
  }

  if (/\w+@\w+[.]\w+/.test(email.value)) {
    isValidObj['email'] = true;
  }

  if (/^2024\d{6}$/.test(orderNo.value)) {
    isValidObj['order-no'] = true;
  }

  if (/^[a-z]{2}\d{2}-[a-z]{1}\d{3}-[a-z]{2}\d{1}$/i.test(productCode.value)) {
    isValidObj['product-code'] = true;
  }

  if (quantity.value > 0) {
    isValidObj['quantity'] = true;
  }

  complaintsInputs.forEach((e) => {
    if (e.checked) {
      isValidObj['complaints-group'] = true;
    }
  });

  if (otherComplaint.checked && !/.{20,}/.test(complaintDescription.value)) {
    isValidObj['complaint-description'] = false;
  }

  solutionsInputs.forEach((e) => {
    if (e.checked) {
      isValidObj['solutions-group'] = true;
    }
  });

  if (otherSolution.checked && !/.{20,}/.test(solutionDescription.value)) {
    isValidObj['solution-description'] = false;
  }

  return isValidObj;
}

function isValid(obj) {
  for (let test in obj) {
    if (!obj[test]) {
      return false;
    }
  }

  return true;
}

// Adding Event Listeners
fullName.addEventListener('change', () => {
  if (validateForm()['full-name']) {
    fullName.style['border-color'] = 'green';
  } else {
    fullName.style['border-color'] = 'red';
  }
});

email.addEventListener('change', () => {
  if (validateForm()['email']) {
    email.style['border-color'] = 'green';
  } else {
    email.style['border-color'] = 'red';
  }
});

orderNo.addEventListener('change', () => {
  if (validateForm()['order-no']) {
    orderNo.style['border-color'] = 'green';
  } else {
    orderNo.style['border-color'] = 'red';
  }
});

productCode.addEventListener('change', () => {
  if (validateForm()['product-code']) {
    productCode.style['border-color'] = 'green';
  } else {
    productCode.style['border-color'] = 'red';
  }
});

quantity.addEventListener('change', () => {
  if (validateForm()['quantity']) {
    quantity.style['border-color'] = 'green';
  } else {
    quantity.style['border-color'] = 'red';
  }
});

complaintsGroup.addEventListener('change', () => {
  if (validateForm()['complaints-group']) {
    complaintsGroup.style['border-color'] = 'green';
  } else {
    complaintsGroup.style['border-color'] = 'red';
  }
});

complaintDescription.addEventListener('change', () => {
  if (validateForm()['complaint-description']) {
    complaintDescription.style['border-color'] = 'green';
  } else {
    complaintDescription.style['border-color'] = 'red';
  }
});

solutionsGroup.addEventListener('change', () => {
  if (validateForm()['solutions-group']) {
    solutionsGroup.style['border-color'] = 'green';
  } else {
    solutionsGroup.style['border-color'] = 'red';
  }
});

solutionDescription.addEventListener('change', () => {
  if (validateForm()['solution-description']) {
    solutionDescription.style['border-color'] = 'green';
  } else {
    solutionDescription.style['border-color'] = 'red';
  }
});

form.addEventListener('submit', () => {
  isValid(validateForm());
});
