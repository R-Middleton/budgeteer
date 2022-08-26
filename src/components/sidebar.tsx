import cashLogo from '../assets/cash.svg';

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 text-white grid-in-sidebar bg-sky-800'>
      <h1 className='ml-2 text-slate-100 text-xl '>Budgeteer</h1>
      <div className='btn border-none mt-2 bg-sky-600 justify-start'>
        <h2 className='normal-case flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            className='w-6 h-6 stroke-slate-100'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
            />
          </svg>
          <h2 className='text-slate-100'>Budget</h2>
        </h2>
      </div>
      <div className='btn mt-1 border-none btn-outline justify-start'>
        <h2 className='normal-case flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            className='w-6 h-6 stroke-slate-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6'
            />
          </svg>

          <h2 className='text-slate-300'>Reports</h2>
        </h2>
      </div>
      <div className='btn mt-1 border-none btn-outline justify-start'>
        <h2 className='normal-case flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            className='w-6 h-6 stroke-slate-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
            />
          </svg>

          <h2 className='text-slate-300'>All Accounts</h2>
        </h2>
      </div>
      <details open className='pt-6 appearance-none'>
        <summary className='px-2 text-xs text-slate-200 flex'>
          <h2 className='flex-1 font-mono'>Accounts</h2>
          <span className='italic'>£1000</span>
        </summary>
        <div className='form-control pt-2 px-5 text-xs text-slate-200'>
          <div className='flex'>
            <span className='flex-1'>My main account </span>
            <span>£1000</span>
          </div>
        </div>
      </details>
      <button className='btn btn-xs normal-case text-2xs font-light w-28 mt-4 btn-ghost bg-sky-900'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          className='w-4 h-4 fill-slate-300'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z'
            clipRule='evenodd'
          />
        </svg>
        <span className='flex-1'>Add Account</span>
      </button>
    </div>
  );
};

export default Sidebar;
