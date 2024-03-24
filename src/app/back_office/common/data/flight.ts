import { Flight } from "../interface/flightProp";

export const Flights: Flight[] = [
    {
        flightCode: "AT1234",
        timeTakeOff: "2024-08-24T09:10:00",
        timeLanding: "2024-08-24T12:10:00",
        fromCity: "Paris",
        toCity: "Casablanca",
        airportFrom: "POL",
        airportTo: "CMD",
        airline: "ROYAL AIR MAROC",
        price: 2000,
        seatNumber: "A12",
        checkin: true,
        last: "Doe"
    },
    {
        flightCode: "AT5678",
        timeTakeOff: "2024-08-25T09:30:00",
        timeLanding: "2024-08-25T12:30:00",
        fromCity: "Casablanca",
        toCity: "Paris",
        airportFrom: "CMD",
        airportTo: "POL",
        airline: "ROYAL AIR MAROC",
        price: 2200,
        seatNumber: "B14",
        checkin: true,
        last: "Smith"
    },
    {
        flightCode: "AT91011",
        timeTakeOff: "2024-08-26T10:00:00",
        timeLanding: "2024-08-26T13:00:00",
        fromCity: "Paris",
        toCity: "London",
        airportFrom: "POL",
        airportTo: "LHR",
        airline: "British Airways",
        price: 2500,
        seatNumber: "C7",
        checkin: false,
        last: "Johnson"
    }
];
