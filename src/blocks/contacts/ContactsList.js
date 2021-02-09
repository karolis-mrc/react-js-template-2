import React from 'react';

const ContactsList = () => {
  return (
    <section id="contacts" className="block spacer p-top-xl overflow-hidden">
      <div className="wrapper">
        <div className="contact-list-group">
          <div className="list-group list-group-horizontal">
            <div className="list-group-item">
              <h5 className="list-group-item-title">Location</h5>
              <p className="list-group-item-text">
                6 Bennett Drive, Sutton Coldfield, United Kingdom, B74 4BF
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="list-group-item-title">Manager</h5>
              <p className="list-group-item-text">
                <a href="tel:+43253312523">+432 533 12 523</a>
                <br />
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="list-group-item-title">CEO</h5>
              <p className="list-group-item-text">
                <a href="tel:+43253312523">+432 533 12 523</a>
                <br />
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="img-no-wrap-1 spacer p-top-xl">
          <div className="img object-fit">
            <div className="object-fit-cover">
              <img src="assets/img/placeholder/1487x631.jpg" alt="Contacts" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsList;
