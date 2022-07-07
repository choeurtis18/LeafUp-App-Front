export interface Species {
    id: number;
    species: string;
    req_humidity_air: Float32Array;
    req_light: number;
    req_dirt_humidity: Float32Array;
    req_amb_temp: number;
    req_watering_day: number;
    imgPlant: string;
}
