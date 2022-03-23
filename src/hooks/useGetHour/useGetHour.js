
const hour = new Date().getHours();
let timeOfDay;
if (hour < 12) {
    timeOfDay = "Morning";
} else if (hour >= 12 && hour < 17) {
    timeOfDay = "Afternoon";
} else {
    timeOfDay = "Evening";
}

export const useGetHour = () => {
    return timeOfDay;
}