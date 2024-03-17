export interface IPlayer {
    name: string;
    id: string;
    score: number;
    online: boolean;
    gems: Array<'Diamond' | 'Emerald' | 'Quartz' | 'Sapphire' | 'Topaz'>
} 