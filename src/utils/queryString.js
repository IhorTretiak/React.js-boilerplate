/**
 * Transform queryString to object
 * @param {string} url e.g. 'https://google.com?page=1&count=10'
 * @returns {*} e.g. { page: "1", count: "10" }
 */
export const queryStringToObject = (url) => {
  const [, searchParamsString] = url.split('?');

  return [...new URLSearchParams(searchParamsString)].reduce(
    (acc, [key, value]) => {
      acc[key] = value;

      return acc;
    },
    {},
  );
};

/**
 * Transform object to queryString
 * @param object e.g. { page: 1, count: 10 }
 * @returns {string} e.g. '?page=1&count=10'
 */
export const objectToQueryString = (object) => `?${Object.keys(object)
  .map((key) => `${key}=${object[key].toString()}`)
  .join('&')}`;
