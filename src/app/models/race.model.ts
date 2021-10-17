export interface IRace {
    id?: number,
    title?: string,
    startDate?: Date,
    endDate?: Date,
    url?: string

}

export class Race implements IRace {
    constructor(public id?: number,
                public title?: string,
                public startDate?: Date,
                public endDate?: Date,
                public url?: string
    )
    {}
}