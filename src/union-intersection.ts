type NoobDeveloper = {
    name:string;
}

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

enum Level {
    junior= 'junior',
    mid= 'mid',
    senior= 'senior',
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number;
    level: Level;
}

const developer: NextLevelDeveloper = {
    name: 'Next bhai',
    expertise:'Typescript',
    experience: 2,
    leadershipExperience:1,
    level: Level.junior,
}


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name:'Moznu Mia',
    expertise: 'Javascript',
    experience: 1,
}