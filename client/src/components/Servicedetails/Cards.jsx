import React from 'react';
import Men from '../../assets/ServicesDetails/men.jpg';
import Laptop from '../../assets/ServicesDetails/laptop.jpg';

const Cards = () => {
  const cardData = [
    {
      image: Men,
      title: 'Solutions',
      highlight: 'Best',
      description: 'We provide innovative IT solutions to drive business success.',
    },
    {
      image: Laptop,
      title: 'Analyses',
      highlight: 'Data',
      description: 'We empower decisions through detailed data insights.',
    },
  ];

  const Card = ({ image, title, highlight, description }) => {
    return (
      <div className='flex flex-1 overflow-hidden rounded-md bg-tertiary'>
        <img src={image} alt={title} className='object-cover w-1/3' />
        <div className='flex flex-col justify-center px-4 py-2 '>
          <h1 className='text-lg font-bold lg:text-xl text-secondary'>
            <span className='text-primary'>{highlight}</span> {title}
          </h1>
          <p className='text-sm font-medium lg:text-base text-secondary'>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col gap-6 my-1 xl:flex-row'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          highlight={card.highlight}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Cards;
