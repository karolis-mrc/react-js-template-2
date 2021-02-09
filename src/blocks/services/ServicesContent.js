import React from 'react';
import ServicesContentItemsData from '../../data/services/servicesContentItems';

const ServicesContent = () => {
  return (
    <div className="services">
      <div className="items clearfix">
        {ServicesContentItemsData &&
          ServicesContentItemsData.map((item, key) => {
            return (
              <div key={key}>
                <a title={item.title} className="item" href={process.env.PUBLIC_URL + item.link}>
                  <div className="item-content">
                    <h4 className="item-title">{item.title}</h4>
                  </div>

                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                  </div>

                  <div className="img-bg-color"></div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServicesContent;
