// we use in memory database
let users = [
  { id: 1, name: "John Doe", mob: "1234567890", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", mob: "9876543210", email: "jane.smith@example.com" }
];

let nextId = 3; 

export const getAllUsers = () => users;