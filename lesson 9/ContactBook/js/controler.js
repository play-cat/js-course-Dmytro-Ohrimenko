const html = document.querySelector('#contact-list');
const template = document.querySelector('#template').innerHTML;
const contactForm = document.querySelector('#contactForm');

console.log(template);

// inputs
const firstnameInput = document.querySelector('#firstnameInput');
const lastnameInput = document.querySelector('#lastNameInput');
const phoneInput = document.querySelector('#phoneInput');
const emailInput = document.querySelector('#emailInput');
const descriptionInput = document.querySelector('#descriptionInput');

let editId;

// render
function render() {
  contactList.renderWithTemplate(contactBook.contacts, html, template);
}

contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Відміняє дефолтну дію в даному випадку відміняє submit

  let contact = {
    firstName: firstnameInput.value,
    lastName: lastnameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    description: descriptionInput.value,
  };

  if (!editId) {
    contactBook.add(contact);
  } else {
    contactBook.update(editId, contact);
    editId = '';
  }
  e.target.reset();

  render();
});

function remove(id) {
  contactBook.remove(id);
  render();
}

function edit(id) {
  const contact = contactBook.find(id);
  editId = contact.id;

  firstnameInput.value = contact.firstName;
  lastnameInput.value = contact.lastName;
  phoneInput.value = contact.phone;
  emailInput.value = contact.email;
  descriptionInput.value = contact.description;
}

render();
