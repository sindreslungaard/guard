### Permission Guard
Dead simple, zero dependency nodejs permission manager.

Permissions are string based and can be split into nodes with a `dot` separator. Wildcards can be applied to each permission node.

### Installation
```nodejs
npm i @sindres/guard
```

### Example usage
```javascript
const guard = require('@sindres/guard');

let myPermissions = [
	'site.frontpage',
	'site.dashboard',
	'site.profiles.*'
];

let authorized = guard(myPermissions, [
	'site.frontpage',
	'site.profiles.comment',
	'site.profiles.delete'
]);

console.log(authorized) // true
```