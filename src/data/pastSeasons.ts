export interface SeasonResult {
  season: number;
  year?: string;           // optional, agar year bhi dikhana ho
  winner: string;
  runnerUp: string;
  thirdPlace: string;
}

export const pastSeasons: SeasonResult[] = [
  { season: 1, winner: 'AANJANA ROYALS ARNAAY', runnerUp: 'AANJANA 11, DABHAL', thirdPlace: 'SSCC GOLASAN' },
  { season: 2, winner: 'AANJANA ROYALS ARNAAY', runnerUp: 'SHREE RAM CHALLENGERS, SIDDHESAWR', thirdPlace: 'TEAM NAME HERE' },
  { season: 3, winner: 'BICHAWADI WARRIORS', runnerUp: 'AANJANA 11, DABHAL', thirdPlace: 'SSCC GOLASAN' },
  { season: 4, winner: 'AANJANA ROYALS ARNAAY', runnerUp: '11 STAR PATHMEDA', thirdPlace: 'MAHADEV CLUB, MAKHUPURA' },
];