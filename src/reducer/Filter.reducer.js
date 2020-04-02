
const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETED':
      return 'COMPLETED';
    case 'SHOW_INCOMPLETED':
      return 'INCOMPLETED';
    case '':
      return state.filter;
    default:
      throw new Error();
    }
};


export default FilterReducer;
