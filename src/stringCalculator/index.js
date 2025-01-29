function add(numbers) {
	try {
		let nagetiveNumbers = [];
		return !numbers && 0 || numbers?.split(",")?.reduce((sum, num) => sum + Number(num), 0);
	} catch (error) {
		console?.log(error,"Failed during execution.")
	}
}

module.exports = add;