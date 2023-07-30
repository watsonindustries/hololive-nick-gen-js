import { assert, test } from 'vitest';
import { generateNickname } from './index';

test('generateNickname generates a nickname', () => {
	const nickname = generateNickname();
	assert(typeof nickname === 'string');
	assert(nickname.length < 25);
});