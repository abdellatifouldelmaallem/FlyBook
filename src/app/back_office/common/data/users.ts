import { User } from '../interface/userProp';

export const Users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    ticket: true,
    role: 'Admin'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    ticket: false,
    role: 'Passenger'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    ticket: true,
    role: 'Passenger'
  },
  {
    id: 4,
    name: 'Bob Williams',
    email: 'bob@example.com',
    ticket: true,
    role: 'Admin'
  }
];
