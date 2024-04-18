import { validate } from './validate';

describe('validate function', () => {
    test('should return true for valid input', () => {
        const validInput = 'Hello123';
        const result = validate(validInput);
        expect(result).toBe(true);
    });

    test('should return false for invalid input', () => {
        const invalidInput = 'Hello!123';
        const result = validate(invalidInput);
        expect(result).toBe(false);
    });

    test('should return true for empty string', () => {
        const emptyString = '';
        const result = validate(emptyString);
        expect(result).toBe(true);
    });

    test('should return true for input with only alphanumeric characters', () => {
        const alphanumericInput = 'Abc123';
        const result = validate(alphanumericInput);
        expect(result).toBe(true);
    });

    test('should return false for input with special characters', () => {
        const specialCharInput = 'Hello!';
        const result = validate(specialCharInput);
        expect(result).toBe(false);
    });

    test('should return false for input with special characters mixed with alphanumeric characters', () => {
        const mixedInput = 'Hello123!';
        const result = validate(mixedInput);
        expect(result).toBe(false);
    });
});