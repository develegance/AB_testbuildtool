export const setCookie = (cName, cValue, expDays) => {
  var date = new Date();

  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  var expires = 'expires=' + date.toUTCString();

  document.cookie = cName + '=' + cValue + '; ' + expires;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
