import { Category } from "./category.model";
import { Journey } from "./journey.model";

export interface IRace {
    id?: number,
    title?: string,
    startDate?: Date,
    endDate?: Date,
    url?: string,
    journey?: Journey,
    categories?: Category[]

}

export class Race implements IRace {
    constructor(public id?: number,
                public title?: string,
                public startDate?: Date,
                public endDate?: Date,
                public url?: string,
                public journey?: Journey,
                public categories?: Category[]
    )
    {}
}