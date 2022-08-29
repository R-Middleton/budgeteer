const HeaderTotals = () => {
  return (
    <div className=' bg-slate-300 rounded-md m-3 p-2 flex items-center gap-2'>
      <div className='flex flex-col justify-center'>
        <div className='text text-2xl font-sans font-bold text-slate-600'>
          £0.00
        </div>
        <div className='text text-sm font-sans text-slate-600'>
          All Money Assigned
        </div>
      </div>
      <div className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          className='w-10 h-10 fill-slate-600'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderTotals;
