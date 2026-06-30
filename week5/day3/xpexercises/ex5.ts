// Exercise 5: Extending Interfaces

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);

  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  }
}

// Testing

const premiumUser: PremiumUser = {
  id: 1,
  name: "Osher Amanda Favel",
  email: "osher@example.com",
  membershipLevel: "Gold"
};

printUserDetails(premiumUser);

// Uncommenting this line will produce a TypeScript error
// premiumUser.id = 2;