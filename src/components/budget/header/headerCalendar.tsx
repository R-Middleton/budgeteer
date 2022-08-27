const HeaderCalendar = () => {
  return (
    <div className='flex items-center p-3 text-slate-700'>
      <button className='btn btn-sm btn-circle btn-outline text-sky-700 hover:text-sky-800 hover:bg-slate-200'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-8 h-8 pr-0.5 pb-0.5'
        >
          <path
            fillRule='evenodd'
            d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div className='flex flex-col items-center px-4'>
        <div className='flex items-center'>
          <button className='text font-sans font-bold text-2xl'>
            Aug 2022
          </button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-6 h-6 ml-0.5 text-sky-700'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <span className='text text-sm text-slate-600'>Enter a note..</span>
      </div>
      <button className='btn btn-sm btn-circle btn-outline text-sky-700 hover:text-sky-800 hover:bg-slate-200'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-8 h-8 pb-0.5 text-sky-700'
        >
          <path
            fillRule='evenodd'
            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <button className='btn btn-sm btn-outline btn-ghost normal-case text-sky-700 border-slate-400 ml-4 hover:bg-sky-700 hover:text-slate-100'>
        Today
      </button>
    </div>
  );
};

export default HeaderCalendar;
