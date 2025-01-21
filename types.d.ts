import { User, UserRole } from '@prisma/client';
import { type DefaultSession } from 'next-auth';

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  role?: UserRole;
};

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  type: 'PADAT' | 'CAIR' | 'GAS';
}

export interface Basket {
  id: string;
  type: 'PADAT' | 'CAIR' | 'GAS';
  label: string;
  items: Item[];
}
