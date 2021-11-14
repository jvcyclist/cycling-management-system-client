import { ServiceCandidate } from "./service-candidate.model";

export interface IServicesResponse {
    candidates?: ServiceCandidate[]
    status?: string,
}

export class ServicesResponse implements IServicesResponse {
    constructor(public results?: ServiceCandidate[],
                public status?: string
    )
    {}
}