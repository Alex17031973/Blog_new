const authController = require('../controllers/authController');
const User = require('../models/user');
jest.mock('../models/user'); // Використовуємо Mock

describe('Тестування авторизації', () => {
    test('Перевірка успішного входу', async () => {
        User.findOne.mockResolvedValue({ username: 'testUser', password: 'hashedPass' });
        const response = await authController.login({ body: { username: 'testUser', password: 'hashedPass' } });
        expect(response.status).toBe(200);
        expect(response.message).toBe('Login successful');
    });
});