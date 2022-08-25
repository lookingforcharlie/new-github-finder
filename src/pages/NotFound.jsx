import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-6xl font-bold mb-8'>Oops!</h1>
          <p className='text-4xl mb-8'>404 - Page Not Found!</p>
          <Link className='btn btn-primary btn-lg' to='/'>
            <FaHome className='mr-3' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
