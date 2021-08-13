import { createContext } from 'react';

export const _nullUser = {
  user: {
    username: null,
    userId: null,
    phoneNumber: null,
  },
  updateUser: () => null,
};

const UserContext = createContext<any>(_nullUser);

export default UserContext;
