const contactList = {
  renderWithTemplate(contacts, element, template) {
    let html = '';
    contacts.forEach(contact => {
      html += Mustache.render(template, contact);
    });
    element.innerHTML = html;
  },

  // рендер на чистому JS
  // render(contacts, element) {
  //   contacts.forEach(contact => {
  //     let divContact = document.createElement('div');
  //     divContact.classList.add('contact');

  //     divContact.insertAdjacentHTML(
  //       'beforeend',
  //       `<h2>${contact.firstName} ${contact.lastName}</h2>`
  //     );
  //     divContact.insertAdjacentHTML(
  //       'beforeend',
  //       `<p>Phone: ${contact.phone}</p>`
  //     );
  //     divContact.insertAdjacentHTML(
  //       'beforeend',
  //       `<p>Email: ${contact.email}</p>`
  //     );
  //     divContact.insertAdjacentHTML(
  //       'beforeend',
  //       `<p>${contact.description}</p>`
  //     );

  //     element.appendChild(divContact);
  //   });
  // },
};
