function calculatePercentage(revenueByState) {
    const totalRevenue = Object.values(revenueByState).reduce((a, b) => a + b, 0);
    const percentageByState = {};
    
    for (const state in revenueByState) {
        percentageByState[state] = (revenueByState[state] / totalRevenue) * 100;
    }
    
    return percentageByState;
}

const revenueByState = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const percentageByState = calculatePercentage(revenueByState);

for (const state in percentageByState) {
    console.log(`${state}: ${percentageByState[state].toFixed(2)}%`);
}