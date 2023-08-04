import { XMarkIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

export default function Toast({ type, text, onClose }) {
  const getIcon = () => {
    let baseclassName =
      'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg';
    switch (type) {
      case 'error':
        baseclassName += ' text-red bg-red25/20';
        return (
          <div className={baseclassName}>
            <XCircleIcon className='block w-5 h-5' aria-hidden='true' />
            <span className='sr-only'>Error icon</span>
          </div>
        );
    }
  };
  return (
    <div
      id='toast'
      className='fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow'
      role='alert'
    >
      {getIcon()}
      <div className='ml-3 text-sm font-normal'>{text}</div>
      <button
        type='button'
        id='close-button'
        className='ml-auto -mx-1.5 -my-1.5 hover:text-black rounded-lg p-1.5 hover:bg-gray/20 inline-flex items-center justify-center h-8 w-8'
        onClick={onClose}
        aria-label='Close'
      >
        <span className='sr-only'>Close</span>
        <XMarkIcon className='block w-3 h-3' aria-hidden='true' />
      </button>
    </div>
  );
}

Toast.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func,
};
