'use strict';

const sentences = [
{subject: 'Valakas', verb: 'is', object: 'old'},
	{subject: 'Detrow', verb: 'are', object: 'rofler'},
];

function say ({ subject, verb, object }) {
	console.log('${subject} ${verb} ${object}' );
}
	
for(let s of sentences) {
	say(s);
}