import { Accomodation } from "./accomodation.model";
import { Address } from "./address.model";
import { Rider } from "./rider.model";

export interface IJourney {
    id?: number
    accomodation?: Accomodation,
    riders?: Rider[]
}

export class Journey implements IJourney {
    constructor(public id?: number,
                public accomodation?: Accomodation,
                public riders?: Rider[]
    )
    {}
}