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
    return false;
  }

  if (!containsOnlyNumbers(month) || !containsOnlyNumbers(year)) {
    return false;
  }

  return true;
}

export const isFutureDate = (date: string) => {
  const dateArr = date.split('/');
  const [month, year] = dateArr;
  const futureDate = new Date(Number('20' + year), (Number(month) - 1));
  const today = new Date();
  if (futureDate < today) {
    return false;
  }
  return true;
}

export const hasErrors = (errors: { [key: string]: string}) => {
  const errorVals = Object.values(errors).filter((err) => (err ? true : false));
  return errorVals.length > 0 ? true : false;
}