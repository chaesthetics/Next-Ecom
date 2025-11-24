import type { $Enums } from "@prisma/client";

export type ItemOwner = {
  id: string;
  name: string | null;
  email: string | null;
  hashedPassword: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: $Enums.UserRole | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Item = {
  id: string;
  name: string;
  description: string | null;
  image: string;
  category: string | null;
  price: string | null;
  quantity: string | null;
  ownerId: string;
  owner: ItemOwner | null;
  createdAt: Date;
  updatedAt: Date;
} | null;
