const USER = 'user';

export const getUser = () => {
  const user = LocalStorage.getItem(USER);

  return JSON.parse(user);
};

export const setUser = (user) => {
  LocalStorage.setItem(USER, JSON.stringify(user));
};
