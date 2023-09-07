// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if(person.role === Role.ADMIN){
    console.log('is author');
}



 //person.role.push('admin');
 //person.role[1] = 10;
 // person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}