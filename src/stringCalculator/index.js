function add(numbers) {
	try {
		const allNumbers = numbers.split(/,|;|\n/).map(Number)?.forEach(num =>{
			console?.log(num,"dasasd")
		});
  
  return allNumbers;
		allNumber = numbers?.split("/,|\n/;").map(Number).forEach(num => num);
		console?.log(allNumber,"allNumber");
		// if(?.reduce((sum, num) => sum + Number(num), 0))
		// return !numbers && 0 || numbers?.split(",")?.reduce((sum, num) => sum + Number(num), 0);
	} catch (error) {
		console?.log(error,"Failed during execution.")
	}
}

module.exports = add;