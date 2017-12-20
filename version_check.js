
// check if the current version if the second version is lower than the first version it will return false else return true
function isValidVersion(firstVersion, secondVersion){

	var firstVersion = firstVersion.split('.').join("");
	var secondVersion = secondVersion.split('.').join("");
	var firstVersionLenght = firstVersion.length - secondVersion.length;

	for(i = 1; i <= firstVersionLenght; i++){
		secondVersion += "0";
	}

	if (secondVersion < firstVersion){
		return false;
	}

	return true;

}