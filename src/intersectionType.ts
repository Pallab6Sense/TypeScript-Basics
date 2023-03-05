interface hasName {
  firstName: string;
  lastName: string;
}
interface hasAddress {
  address: string;
}

type player = hasName & hasAddress; //!player is a type of hasName and hasAddress

const player: player = {
  firstName: 'Pallab',
  lastName: 'Majumdar',
  address: 'Mirpur-2,Dhaka',
};


console.log(player);
