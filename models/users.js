import users from "../data/users.js";

// GET ALL USERS
export function getUsers() {
    return users;
}

// GET A USER BY ID
export function getUserByID(id) {
    const found = users.find(function(users){
        return users.id === id
    });
    return found;
}

// CREATE A USER
export function createUser(user) {
    users.push(user);
    return users[users.length - 1]
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
    const found = users.findIndex(function(user){
        return users.id === id;
    });
    users[index] = updates;
    return users[index];
}

// DELETE A USER BY ID
export function deleteUserByID(id) {
    const foundIndex = users.findIndex(function(user){
        return user.id === id;
    });
    const item = users[foundIndex];
    users.splice(foundIndex, 1);
    return item;
}

// GENERATE A USER

// export function generateID(id) {
//     const 
// }