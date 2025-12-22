const getNewSearchParams = (oldParams, change) => {
  let params = new URLSearchParams(oldParams);
  const [key, value] = change;
  if (!value) {
    params.delete(key);
    return params;
  }
  params.set(key, value);
  return params;
};

export default getNewSearchParams;
