const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// which holds the sum of all of the battery amounts in the batteryBatches array. 




// Create a new variable called totalBatteries, 
const totalBatteries = batteryBatches.reduce(function (total, batches) {
    return batches + total
})

console.log(totalBatteries)

