/** DriverStatus Id. */
export enum DriverStatusId {
    unknown = 0,
    disconnected = 1,
    connected = 2,
    available = 5,
    toBase = 10,
    onBase = 20,
    onTheWay = 100,
    onDoor = 110,
    circling = 120,
    announced = 130,
    noShowWarning = 135,
    withPax = 140,
    withPaxWaiting = 150,
    free = 160,
    unavailable = 1000
}
