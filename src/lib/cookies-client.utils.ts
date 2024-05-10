export function getCookieClient<T>(name: string, initialValue: T) {
  if (typeof document === "undefined" || !document.cookie)
    return initialValue;

  const cookie = document.cookie
    .split(';')
    .map(cookie => cookie.trim())
    .find(cookie => cookie.startsWith(`${name}=`));

  if (cookie) {
    const value = decodeURIComponent(cookie.split('=')[1]);
    return JSON.parse(value) as T;
  }

  return initialValue;
}

export function setCookieClient<T>(name: string, value: T) {
  if (typeof document === "undefined" || !document.cookie)
    return;

  const encodedValue = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${name}=${encodedValue}`;
}