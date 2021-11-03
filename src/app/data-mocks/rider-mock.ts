import { Rider } from "../models/rider.model";


export class RiderMock{
    
    riders: Rider[] = [
        {
            id: 1,
            firstName: "Tomek",
            lastName: "Nowal",
            licenseNo: "NO000001"
        },
        {
            id: 2,
            firstName: "Adam",
            lastName: "Abacki",
            licenseNo: "NO000002"
        },
        {
            id: 3,
            firstName: "Piotr",
            lastName: "Kolarski",
            licenseNo: "NO000003"
        },
        {
            id: 4,
            firstName: "Tomek",
            lastName: "Nowal",
            licenseNo: "NO000004"
        },
        {
            id: 5,
            firstName: "Hubert",
            lastName: "Wisniewski",
            licenseNo: "NO000005"
        },
        {
            id: 6,
            firstName: "Andrzej",
            lastName: "Sapkowski",
            licenseNo: "NO000006"
        },
        {
            id: 7,
            firstName: "Geralt",
            lastName: "Z Rivii",
            licenseNo: "NO000007"
        },
       

    ]
    
    save(rider: Rider){ 
        if (rider.id !== null){
            this.riders[rider.id? rider.id - 1 : 0 - 1] = rider;
        }
        else {
            rider.id = this.riders.length-1 ;
            this.riders.push(rider)
        }

    }
}