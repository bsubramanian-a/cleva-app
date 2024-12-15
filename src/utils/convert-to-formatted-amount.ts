function calculatePaymentAmount(amount: number | null | undefined | string): string {
    if (amount === null || amount === undefined || amount === "") {
        return "No Data";
    }

    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }

    return `$${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export default calculatePaymentAmount;