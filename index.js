const guard = (myPermissions, requiredPermissions) => {

	let wildcardNodes = [];

	for(let permission of myPermissions) {

		let parts = permission.split('*');
		if(parts.length !== 2)
			continue;

		wildcardNodes.push(parts[0]);

	}

	let authorized = true;
  
	for(let permission of requiredPermissions) {

		let wildCardCheck = false;
		let definiteCheck = false;

		for(wildcardNode of wildcardNodes)
			if(permission.startsWith(wildcardNode)) wildCardCheck = true;

		if(myPermissions.includes(permission))
			definiteCheck = true;

		if(!wildCardCheck && !definiteCheck) {
			authorized = false;
			break;
		}

	}

	return authorized;

}

module.exports = guard;