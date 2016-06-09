export class User {
	email: string;
	name: string; 
	password: string;


	constructor(email,name , password){
		this.email = email;
		this.name = name;
		this.password = password;
	}
}