// feel free to add more test cases.
// the format is as follows - 
// [[numbers, targetSum], expectedOutput, errorMessage]

const testCases = [
	[[[5, 4, 10, 7, 1, 9], 13], true, "Triplet Exists"],
	[[[4, 2, 5, 8, 11, 23], 9], false, "Triplet does not exist"]
]

function main(
	numbers,
	targetSum) {
	// complete this function
	for (let i = 0; i < numbers.length; i++) {
		let sumMap = {};
		const currentSum = targetSum - numbers[i];
		for (let j = i + 1; j < numbers.length; j++) {
			if(sumMap[currentSum - numbers[j]]){
				console.log(`True  # triplet <${numbers[i]}, ${currentSum - numbers[j]}, ${numbers[j]}>`);
				return true;
			}
			sumMap[numbers[j]] = true;
		}
	}
	console.log("False")
	return false;
}

testCases.forEach(([input, expectedResult, message]) => {
	console.assert(main(...input) === expectedResult, message)
})

