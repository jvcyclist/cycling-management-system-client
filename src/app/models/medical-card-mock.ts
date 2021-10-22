import { Achievement } from "./achievement.model";
import { MedicalCard } from "./medical-card.model";

export class MedicalCardMock {
    medicalCards: MedicalCard[] = [
        {
            id: 1,
            rider_id: 1,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57'),
        },
        {
            id: 2,
            rider_id: 1,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 3,
            rider_id: 2,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 4,
            rider_id: 2,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 5,
            rider_id: 3,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 6,
            rider_id: 3,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 7,
            rider_id: 4,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 8,
            rider_id: 4,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 9,
            rider_id: 5,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 10,
            rider_id: 5,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 11,
            rider_id: 6,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 12,
            rider_id: 6,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 13,
            rider_id: 7,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        },
        {
            id: 14,
            rider_id: 7,
            validFromDate: new Date('Fri Dec 08 2019 07:44:57'),
            validToDate: new Date('Fri Dec 08 2019 07:44:57')
        }
    ]

    getMedicalCardsByRiderId(riderId: number): MedicalCard[]{
        return this.medicalCards.filter(mc => mc.rider_id == riderId);
    }
}