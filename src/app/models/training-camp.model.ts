export interface ITrainingCamp {
    id?: number,
    title?: string,
    startDate?: Date,
    endDate?: Date
}

export class TrainingCamp implements ITrainingCamp {
    constructor(public id?: number,
                public title?: string,
                public startDate?: Date,
                public endDate?: Date
    )
    {}
}