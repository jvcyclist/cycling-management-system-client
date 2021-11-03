export interface IAchievement {
    id?: number
    eventRange?: string,
    city?: string,
    description?: string,
    place?: number,
    achievementDate?: Date
 
}

export class Achievement implements IAchievement {
    constructor(public id?: number,
                public eventRange?: string,
                public city?: string,
                public description?: string,
                public place?: number,
                public achievementDate?: Date,
    )
    {}
}