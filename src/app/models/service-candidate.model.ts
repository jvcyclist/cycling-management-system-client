import { Address } from "./address.model";

export interface IServiceCandidate {
    formatted_address?: string
    name?: string,
    opening_hours?: {"open_now": boolean},
    rating?: number,
    user_ratings_total?: number
 
}

export class ServiceCandidate implements IServiceCandidate {
    constructor(public formatted_address?: string,
                public name?: string,
                public opening_hours?: {"open_now": boolean},
                public rating?: number,
                public user_ratings_total?: number
    )
    {}
}