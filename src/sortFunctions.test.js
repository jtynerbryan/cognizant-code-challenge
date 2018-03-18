import { sortByHighestMinTemp, sortByLowestMaxTemp, sortByLowestHumidity, sortByHighestWindSpeed, sortBySeaLevelAscending } from './sortFunctions';

const weatherData = [
  { city: 'London', seaLevel: 1005.825, minTemp: 50, maxTemp: 80, humidity: 50, windSpeed: 10 },
  { city: 'New York', seaLevel: 999.975, minTemp: 40, maxTemp: 79, humidity: 100, windSpeed: 20 },
  { city: 'Berlin', seaLevel: 1003.275, minTemp: 55, maxTemp: 68, humidity: 70, windSpeed: 9 },
  { city: 'Boston', seaLevel: 1003.025, minTemp: 10, maxTemp: 100, humidity: 20, windSpeed: 12 }
]

describe('sortByHighestMinTemp', () => {
  it('sorts cities by highest min temp', () => {
    expect(sortByHighestMinTemp(weatherData)).toEqual({name: 'Berlin', minTemp: 55})
  })
})

describe('sortByLowestMaxTemp', () => {
  it('sorts cities by lowest max temp', () => {
    expect(sortByLowestMaxTemp(weatherData)).toEqual({name: 'Berlin', maxTemp: 68})
  })
})

describe('sortByLowestHumidity', () => {
  it('sorts cities by lowest humidity', () => {
    expect(sortByLowestHumidity(weatherData)).toEqual({name: 'Boston', humidity: 20})
  })
})

describe('sortByHighestWindSpeed', () => {
  it('sorts cities by highest wind speed', () => {
    expect(sortByHighestWindSpeed(weatherData)).toEqual({name: 'New York', windSpeed: 20})
  })
})

describe('sortBySeaLevelAscending', () => {
  it('sorts cities by sea level ascending', () => {
    expect(sortBySeaLevelAscending(weatherData)).toEqual([
      { city: 'New York', seaLevel: 999.975, minTemp: 40, maxTemp: 79, humidity: 100, windSpeed: 20 },
      { city: 'Boston', seaLevel: 1003.025, minTemp: 10, maxTemp: 100, humidity: 20, windSpeed: 12 },
      { city: 'Berlin', seaLevel: 1003.275, minTemp: 55, maxTemp: 68, humidity: 70, windSpeed: 9 },
      { city: 'London', seaLevel: 1005.825, minTemp: 50, maxTemp: 80, humidity: 50, windSpeed: 10 }
    ])
  })
})
