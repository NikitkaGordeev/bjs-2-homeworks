function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		return arr1.every((element, i) => element === arr2[i]);
	} else {
		return false
	}
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(client => client.gender == gender).map(client => client.age).reduce((acc, age, i, arr) => {
		acc += age
		if (i === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0)
	return result;
}