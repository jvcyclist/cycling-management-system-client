import { Rider } from "./rider.model";

export interface ITraining {
    id?: number,
    date?: Date,
    type?: string,
    kind?: string,
    distance?: number,
    description?: string,
    riders?: Rider[]
}

export class Training implements ITraining {
    constructor(public id?: number,
                public date?: Date,
                public type?: string,
                public kind?: string,
                public distance?: number,
                public description?: string,
                public riders?: Rider[]
    )
    {}
}