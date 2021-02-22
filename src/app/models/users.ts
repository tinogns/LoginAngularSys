export class Users {

  id:string;
  first_name:string;
  email:string;
  password:string
  phone: string;


  constructor(id,first_name,email,password,phone  ) { 
    this.id=id;
    this.first_name=first_name;
    this.email=email;
    this.password=password;
    this.phone=phone;
  }
    
}