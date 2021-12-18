import { BikeUsageHistory } from "./bike-usage-history.model";

export interface IBike {
    id?: number,
    referenceNumber?: string,
    mark?: string,
    model?: string,
    type?: string,
    bikeUsageHistories?: BikeUsageHistory[]
 
}

export class Bike implements IBike {
    constructor(public id?: number,
                public referenceNumber?: string,
                public mark?: string,
                public model?: string,
                public type?: string,
                public bikeUsageHistories?: BikeUsageHistory[]
    )
    {}
}