export class userdetails{
    public name: string;
    public dob: string;
    public age: number;
    public occupation: string;
    public sum : number;
    constructor(
         name: string,
         dob: string,
         age: number,
         occupation: string,
         sum : number
        ){
            this.name = name;
            this.age = age;
            this.dob = dob;
            this.occupation = occupation;
            this.sum = sum;

    }
  
}