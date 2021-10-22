export interface IMedicalCard {
    id?: number,
    rider_id?: number,
    validFromDate?: Date,
    validToDate?: Date
}

export class MedicalCard implements IMedicalCard {
    constructor(public id?: number,
                public rider_id?: number,        
                public validFromDate?: Date,
                public validToDate?: Date
    )
    {}
}