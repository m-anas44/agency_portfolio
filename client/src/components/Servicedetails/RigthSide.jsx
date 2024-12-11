import { useParams } from 'react-router-dom';
import Cards from './Cards';
import data from './mokeData'; // Ensure this path is correct
import WorkBenefits from './WorkBenefit';

const Home = () => {
  const { slug } = useParams(); // Extract the 'service' from the URL
  console.log(slug)
  const pageData = data.find((page) => page.id === slug.toLowerCase()) || data[0];

  // Split the description into two halves
  const description = pageData.description || '';
  const midPoint = Math.ceil(description.length / 2);
  const firstHalf = description.slice(0, midPoint);
  const secondHalf = description.slice(midPoint);

  return (
    <section className='px-4 sm:px-6 lg:px-8'>
      {pageData ? (
        <div className='flex flex-col mx-auto text-secondary'>
          {/* Display Image */}
          <img src={pageData.img} alt={pageData.title} className='w-full h-auto mb-5 rounded-lg' />

          {/* Display Title */}
          <h1 className='mb-2 text-xl font-extrabold leading-7 sm:text-2xl md:text-3xl text-secondary sm:leading-8 md:leading-9'>
            {pageData.title}
          </h1>

          {/* First Half of Description */}
          <p className='text-sm font-medium leading-6 sm:text-base md:text-lg text-secondary lg:my-1'>{firstHalf}</p>

          {/* Cards Component */}
          <Cards />

          {/* Second Half of Description */}
          <p className='text-sm font-medium leading-6 text-secondary sm:text-base md:text-lg lg:my-4'>{secondHalf}</p>

          {/* Work Benefits Component */}
          <WorkBenefits serviceName={pageData.title} />
        </div>
      ) : (
        <h1 className='text-xl font-bold text-red-500'>Page Not Found</h1>
      )}
    </section>
  );
};

export default Home;
