export function formatFullName(user) {
  return `${user.surnameOne} ${user.surnameTwo}, ${user.name}`;
}

export const DEFAULT_DATA_SESION = {
  authenticated: false,
  user: { name: "", surnameOne: "", surnameTwo: "", age: 0 },
};
