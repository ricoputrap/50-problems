export function getItem<T> (key: string, initialValue: T): T  {
  if (typeof window === "undefined" || !window.localStorage)
    return initialValue;

  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);

  return initialValue;
}

export function setItem<T> (key: string, value: T) {
  if (typeof window === "undefined" || !window.localStorage)
    return;
  localStorage.setItem(key, JSON.stringify(value));
}