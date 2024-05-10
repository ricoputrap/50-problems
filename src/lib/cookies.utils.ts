import { cookies } from "next/headers";

export function getCookie<T>(name: string, initialValue: T) {
  const cookie = cookies().get(name);
  if (cookie) return JSON.parse(cookie.value) as T;

  return initialValue;
}

export function setCookie<T>(name: string, value: T) {
  const ONE_MONTH = 60 * 60 * 24 * 30;

  console.log("SET ITEM", name, value);

  cookies().set(name, JSON.stringify(value),  {
    maxAge: ONE_MONTH, // 1 month for 30 days
  });
}