const User = require('../models/user');

describe('Тестування моделі User', () => {
    test('Перевірка створення користувача', () => {
        const user = new User({ username: 'testUser', password: 'hashedPass' });
        expect(user.username).toBe('testUser');
    });
});