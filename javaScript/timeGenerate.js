const today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

const startDate1 = new Date(year, month, day, 12, 45).toISOString().slice(0, -1);
const endDate1 = new Date(year, month, day, 13, 0).toISOString().slice(0, -1);

console.log(startDate1, endDate1);

const response = {
getAvailableSlots: {
    slots: [
    {
        startDate: new Date(year, month, day, 12, 45).toISOString().slice(0, -1),
        endDate: new Date(year, month, day, 13, 0).toISOString().slice(0, -1),
        maxDuration: 15,
    },
    {
        startDate: new Date(year, month, day, 13, 0).toISOString().slice(0, -1),
        endDate: new Date(year, month, day, 13, 15).toISOString().slice(0, -1),
        maxDuration: 15,
    },
    ],
}
};

console.log(JSON.stringify(response));