/**
 * Created by reddyadi on 6/9/2017.
 */

export class Supplier {
    public name: string ;
    public email: string;
    public phone: string;
    public date: string;
    public address: string;

    constructor(name: string, email: string, phone: string,date: string,address: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date=date;
        this.address=address;
    }

}
