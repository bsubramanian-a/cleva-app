const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    const getOrdinalSuffix = (day: any) => {
        if (day === 1 || day === 21 || day === 31) {
            return 'st';
        } else if (day === 2 || day === 22) {
            return 'nd';
        } else if (day === 3 || day === 23) {
            return 'rd';
        } else {
            return 'th';
        }
    };

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const formattedYear = year === currentYear ? '' : ` ${year}`;

    return `${day}${getOrdinalSuffix(day)} ${month}${formattedYear}`;
};

const newFormatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${date.getDate()}/${month}/${date.getFullYear()}`;
    return formattedDate;
}

export { formatDate, newFormatDate };