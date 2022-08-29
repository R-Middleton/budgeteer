const TableToolbar = () => {
  return (
    <div className='flex gap-4 bg-slate-400 p-1'>
      <div className='btn btn-xs '>Create Category</div>
      <div className='btn btn-xs'>Undo</div>
      <div className='btn btn-xs'>Redo</div>
    </div>
  );
};

export default TableToolbar;
