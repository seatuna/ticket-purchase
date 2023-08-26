export const containsOnlyNumbers = (str: string) => {
  return /^\d+$/.test(str);
}

export const isValidDate = (date: string) => {
  if (!date.includes('/')) {
    return false;
  }

  const dateArr = date.split('/');
  if (dateArr.length !== 2) {
    return false;
  }

  const [month, year] = dateArr;
  if (Number(month) < 1 || Number(month) > 12) {
    console.log('fail month check')
    return false;
  }

  if (!containsOnlyNumbers(month) || !containsOnlyNumbers(year)) {
    console.log('fail nums check')
    return false;
  }
}

export const isFutureDate = (date: string) => {
  const dateArr = date.split('/');
  const [month, year] = dateArr;
  const futureDate = new Date(Number('20' + year), (Number(month) - 1));
  console.log(futureDate);
  const today = new Date();
  if (futureDate < today) {
    console.log('future date fail')
    return false;
  }
}