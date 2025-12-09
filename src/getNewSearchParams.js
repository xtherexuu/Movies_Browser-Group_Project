const getNewSearchParams = (oldParams, change) => {
  let params = new URLSearchParams(oldParams);
  const [key, value] = change;
  console.log(params);
  console.log(key, value);
  params.set(key, value);
  return params;
};

export default getNewSearchParams;
