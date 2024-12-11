function calculateLabelFromValue(value: number, labels: any, minValue: number, maxValue: number) {
    const currentValue = (value - minValue) / (maxValue - minValue);
    const currentIndex = Math.round((labels.length - 1) * currentValue);
    const label = labels[currentIndex];
    return label;
}

export default calculateLabelFromValue;