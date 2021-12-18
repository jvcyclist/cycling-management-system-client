import { Bike } from "./bike.model";
import { Rider } from "./rider.model";

export interface IBikeUsageHistory {
    id?: number,
    rider?: Rider,
    bike?: Bike,
    startDate?: Date,
    endDate?: Date
}

export class BikeUsageHistory implements IBikeUsageHistory {
    constructor(  public id?: number,
        public rider?: Rider,
        public bike?: Bike,
        public startDate?: Date,
        public endDate?: Date
        )
    {}
}