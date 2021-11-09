import { Address } from "./address.model";

export interface IAccomodation {
    id?: number
    address?: Address,
    startDateTime?: Date,
    endDateTime?: Date
 
}

export class Accomodation implements IAccomodation {
    constructor(public id?: number,
                public address?: Address,
                public startDateTime?: Date,
                public endDateTime?: Date,
    )
    {}
}