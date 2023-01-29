export const slugsUUID = (length = 6): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

export function isDataNotEmpty<T>(value: T): value is NonNullable<T> {
  if (value == null) {
    return false;
  } else if (
    typeof value !== "number" &&
    typeof value === "string" &&
    value?.trim() === ""
  ) {
    return false;
  } else if (value === undefined) {
    return false;
  } else if (
    value !== null &&
    typeof value === "object" &&
    !Object.keys(value).length
  ) {
    return false;
  } else if (value !== null && Array.isArray(value) && !value.length) {
    return false;
  }
  return true;
}

// export function hasValidSession(value: unknown): value is NonNullable<Session> {
//   return value && typeof value === 'object' ;
// }

export const addHttpPrefix = (url: string): string => {
  if (!/^https?:\/\//i.test(url)) {
    url = "http://" + url;
  }
  return url;
};
