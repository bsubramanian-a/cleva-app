function calculatePaymentAmount(pAMount: number, paymentFrequency: string) {
    switch (paymentFrequency) {
        case "Weekly":
            return `$${(pAMount / 52)?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        case "Fortnightly":
            return `$${(pAMount / 26)?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        case "Monthly":
            return `$${(pAMount / 12)?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        case "Quarterly":
            return `$${(pAMount / 4)?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        case "Twice Yearly":
            return `$${(pAMount / 2)?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        case "Annual":
            return `$${pAMount?.toFixed(2)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        default:
            return `$${0}`;
    }
}

export default calculatePaymentAmount;