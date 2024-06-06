export type EventItem = {
	domain: string;
	date: string;
	title: string;
	duration: string;
	status: 'accepted' | 'deleted' | 'seen' | 'register';
	description: string;
};
