import React from 'react';
import { Link } from 'react-router-dom';

const Mover = () => {
  return (
    <div className='d-flex col h-50 p-2 m-4 gap-4 align-items-center justify-content-center'>
      {/* Link to navigate to Indian component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/New'>Indian</Link>
      </div>
      {/* Link to navigate to Russia component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/Russia'>Russia</Link>
      </div>
      {/* Link to navigate to Canada component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/Canada'>Canada</Link>
      </div>
      {/* Link to navigate to China component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/TM'>China</Link>
      </div>
      {/* Link to navigate to Germany component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/Germany'>Germany</Link>
      </div>
      {/* Link to navigate to France component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/France'>France</Link>
      </div>
      {/* Link to navigate to Hong Kong component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/Hong Kong'>Hong Kong</Link>
      </div>
      {/* Link to navigate to United States component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/United_Sta'>United States</Link>
      </div>
      {/* Link to navigate to United Kingdom component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/United_King'>United Kingdom</Link>
      </div>
      {/* Link to navigate to Netherlands component */}
      <div className='btn btn-info text-center text-danger'>
        <Link className="text-decoration-none text-center text-danger" to='/NetherLand'>Netherlands</Link>
      </div>
    </div>
  );
}

export default Mover;
