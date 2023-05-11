// a type is depended on another type

type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never; 


type Sheikh = {
    wife1: string;
    wife2: string;
}

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<Sheikh, 'wife1'>;

// check korbe oi sheikh type wife2 ase kina ? true : false

// Matha kharap example

type Bandhubi  = 'Monica' | 'Rachel' | 'Pheobe';

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Monica'>;
