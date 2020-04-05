
const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETED':
      return 'COMPLETED';
    case 'SHOW_INCOMPLETED':
      return 'INCOMPLETED';
    default:
      throw new Error(`Something went wrong ... (with action: ${action.type} and state: ${state})`);
    }
};


export default FilterReducer;
