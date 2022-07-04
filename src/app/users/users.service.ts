import { Users } from "../Models/users";

export class UsersService{
    
    private users : Users[] = [
        {id : 1 , name : "Amir", email : "amir@gmail.com"},
        {id : 2 , name : "Sharoon", email : "sharoon@gmail.com"},
        {id : 3 , name : "Awais", email : "awais@gmail.com"},
    ]

    getAllUsers(){
        return this.users.slice();
    }

    getUserById(id : number){
        let userList =  this.users.slice();
        return userList.find(x => x.id == id);
    }
}