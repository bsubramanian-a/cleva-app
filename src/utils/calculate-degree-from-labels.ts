function calculateDegreeFromLabels(degree:number, labels:any) {
    const perLevelDegree = (degree) / (labels.length);
    return perLevelDegree;
}

export default calculateDegreeFromLabels;