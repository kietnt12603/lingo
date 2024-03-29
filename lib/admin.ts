import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2eK4jUf86mN746OhX3tnpDN0Z7G",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
