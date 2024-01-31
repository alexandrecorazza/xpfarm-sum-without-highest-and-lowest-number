const sum = (list) => {
  if (!list || list.length === 0 || list.length === 1) return false
  else {
    const maxNumber = Math.max(...list)
    const minNumber = Math.min(...list)
    const excludeMaxMinNumbers = maxNumber + minNumber;

    return list.reduce((total, number) => total + number, 0) - excludeMaxMinNumbers;
  }
};
  
module.exports = {
  sum,
};