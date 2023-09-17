import Cookies from "universal-cookie";

const USER_UUID_COOKIE_NAME = "user-uuid";
const USER_UUID_MAXAGE = 8640000; //100 days

/**
 * Get from Cookies user UUID (universal unique indentifier) and update its expiration date. If user UUID doens't exists in Coookies generate it.
 * @returns user UUID
 */
export function getUserUUID() {
  const cookies = new Cookies();

  let userUUID = cookies.get(USER_UUID_COOKIE_NAME);

  if (!userUUID) {
    userUUID = uuidv4();
  }
  cookies.set(USER_UUID_COOKIE_NAME, userUUID, {
    path: "/",
    maxAge: USER_UUID_MAXAGE,
  });

  return userUUID;
}

/**
 * Generate UUIDs (Universally Unique IDentifier), also known as GUIDs (Globally Unique IDentifier), according to RFC 4122, are identifiers designed to provide certain uniqueness guarantees
 * @returns UUID
 */
export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
