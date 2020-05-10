class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName ;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const user1 = new User("Wael", "Haded");
console.log(user1);
console.log(user1.firstName);
console.log("My Name is" ,user1.getFullName());