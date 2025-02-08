export class PersonalInforDataModel {
    FullName: string;
    Email: string;
    Phone: string;
    CityAddress: string;
    Summary: string;

    constructor(fullName: string, email: string, phone: string, cityAddress: string, summary: string){
        this.FullName = fullName;
        this.Email = email;
        this.Phone = phone;
        this.CityAddress = cityAddress;
        this.Summary = summary;
    }
}