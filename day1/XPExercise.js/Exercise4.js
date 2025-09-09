const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
    sarah: [3, 990],
    dan:  [4, 1000],
    david: [1, 500],
  },
};

// Number of floors
console.log(building.numberOfFloors);

// Number of apartments on floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// Second tenant and their number of rooms
console.log(building.nameOfTenants[1]); // Dan
console.log(building.numberOfRoomsAndRent.dan[0]); // number of rooms

// Check if Sarah + David rent > Dan's rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]); // Updated Dan's rent if applicable
