const BudgetTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-compact w-full'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Assigned</th>
            <th>Activity</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rent</td>
            <td>£0.00</td>
            <td>£0.00</td>
            <td>£0.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
