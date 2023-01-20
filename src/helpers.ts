import { Json } from './types';

export function JSONToArray(JSONObj: Json) {
	const arr = [];
	for (const [key, value] of Object.entries(
		JSON.parse(JSON.stringify(JSONObj))
	)) {
		arr.push([key, String(value)]);
	}
	return arr;
}
