import { Achievement } from "./achievement.model";

export class AchievementsMock {

    achievements: Achievement[] = [
        {
            id: 1,
            rider_id: 1,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 2,
            rider_id: 1,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2
        },
        {
            id: 3,
            rider_id: 2,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2
        },
        {
            id: 4,
            rider_id: 2,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 5,
            rider_id: 3,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 3
        },
        {
            id: 6,
            rider_id: 3,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 3
        },
        {
            id: 7,
            rider_id: 4,
            range: "Mistrzostwa Polski w kolarstwie torowym - Omnium",
            city: "Łódź",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 8,
            rider_id: 4,
            range: "Mistrzostwa Polski w kolarstwie torowym - 1km",
            city: "Łódź",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 9,
            rider_id: 5,
            range: "Puchar Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 10,
            rider_id: 5,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2
        },
        {
            id: 11,
            rider_id: 6,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 12,
            rider_id: 6,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2
        },
        {
            id: 13,
            rider_id: 7,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1
        },
        {
            id: 14,
            rider_id: 7,
            range: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2
        },

    ]

    getAchievementsByRiderId(riderId: number): Achievement[]{
        return this.achievements.filter(a => a.rider_id == riderId);
    }
}