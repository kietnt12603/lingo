import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2eP2PLgoaERLJbnxrN602afmL7K",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
