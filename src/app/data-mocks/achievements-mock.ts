import { Achievement } from "../models/achievement.model";

export class AchievementsMock {

    achievements: Achievement[] = [
        {
            id: 1,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 2,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 3,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 4,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 5,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 3,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 6,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 3,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 7,
            eventRange: "Mistrzostwa Polski w kolarstwie torowym - Omnium",
            city: "Łódź",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 8,
            eventRange: "Mistrzostwa Polski w kolarstwie torowym - 1km",
            city: "Łódź",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 9,
            eventRange: "Puchar Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 10,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 11,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 12,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 13,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 1,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },
        {
            id: 14,
            eventRange: "Mistrzostwa Polski w kolarstwie szosowym - Start Wspólny",
            city: "Sobótka",
            description: "Test description 1234235423524352",
            place: 2,
            achievementDate: new Date("Fri Dec 08 2019 07:44:57")
        },

    ]

    getAchievementsById(id: number): Achievement[]{
        return this.achievements.filter(a => a.id == id);
    }
}