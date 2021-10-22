export interface IAchievement {
    id?: number,
    rider_id?: number,
    range?: string,
    city?: string,
    description?: string,
    place?: number
 
}

export class Achievement implements IAchievement {
    constructor(public id?: number,
                public rider_id?: number,
                public range?: string,
                public city?: string,
                public description?: string,
                public place?: number
    )
    {}
}