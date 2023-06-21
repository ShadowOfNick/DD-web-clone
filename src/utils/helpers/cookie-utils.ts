export const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return (parts.pop() || '').split(';').shift();
  return undefined;
};

export const setCookie = (name: string, value: string, expirationDays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};
