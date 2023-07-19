// HELPING HANDS //

// Create object and array to store input data
let helpingHandsData = {
	recipients: [],
	donors: []
};

// Create function to store recipient data
const addRecipient = (name, age, photo, need, priority) => {
	let newRecipient = {};
	newRecipient.name = name;
	newRecipient.age = age;
	newRecipient.photo = photo;
	newRecipient.need = need;
	newRecipient.priority = priority;
	helpingHandsData.recipients.push(newRecipient);
};

// Create function to store donor data
const addDonor = (name, age, photo, skill, willingness) => {
	let newDonor = {};
	newDonor.name = name;
	newDonor.age = age;
	newDonor.photo = photo;
	newDonor.skill = skill;
	newDonor.willingness = willingness;
	helpingHandsData.donors.push(newDonor);
};

// Create function to match recipient to suitable donor
const matchRecipientAndDonor = (recipientName, donorName) => {
	let recipient = helpingHandsData.recipients.find(item => item.name === recipientName);
	let donor = helpingHandsData.donors.find(item => item.name === donorName);

	if(recipient && donor) {
		let match = {
			recipientName: recipient.name,
			donorName: donor.name,
			need: recipient.need,
			skill: donor.skill
		};

		helpingHandsData.recipients = helpingHandsData.recipients.filter(item => item.name !== recipientName);
		helpingHandsData.donors = helpingHandsData.donors.filter(item => item.name !== donorName);

		return match;
	} else {
		return null;
	}
};

// Create function to get recipient list
const getRecipientList = () => {
	return helpingHandsData.recipients.map(item => {
		return {
			name: item.name,
			age: item.age,
			need: item.need,
			priority: item.priority
		};
	});
};

// Create function to get donor list
const getDonorList = () => {
	return helpingHandsData.donors.map(item => {
		return {
			name: item.name,
			age: item.age,
			skill: item.skill,
			willingness: item.willingness
		};
	});
};

// Create function to sort recipient list based on priority
const sortRecipientList = () => {
	helpingHandsData.recipients.sort((a, b) => {
		if (a.priority < b.priority) {
			return -1;
		}
		if (a.priority > b.priority) {
			return 1;
		} 
		return 0;
	});
};

// Export functions
module.exports = {
	addRecipient,
	addDonor,
	matchRecipientAndDonor,
	getRecipientList,
	getDonorList,
	sortRecipientList
};