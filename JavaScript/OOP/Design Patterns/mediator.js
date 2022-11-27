class Memeber {
	constructor(name) {
		this.name = name;
		this.chatroom = null;
	}

	send(message, toMember) {
		this.chatroom.send(message, this, toMember);
	}
}

class Chatroom {
	members = {};
	addMember(member) {
		member.chatroom = this;
		this.members[member.name] = member;
	}
	send(message, fromMember, toMember) {
		console.log(`(${fromMember.name}) says: ${message} [to: ${toMember.name}]`);
	}
}

const chatroom = new Chatroom();

const sanaz = new Memeber("sanaz");
chatroom.addMember(sanaz);

const mohammad = new Memeber("mohammad");
chatroom.addMember(mohammad);

sanaz.send("Hi", mohammad);
