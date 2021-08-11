import { validURL } from "../js/checkURL";

describe('Test check URL functionality', () => {
    test('Testing the checkURL function', () => {
        expect(validURL).toBeDefined()
    })

    test('checkUrl return false for invalid url', () => {
        expect(validURL('dwight')).toBeFalsy()
    })
    test('checkUrl return false for invalid url', () => {
        expect(validURL('1231231235454')).toBeFalsy()
    })
    test('checkUrl return false for invalid url', () => {
        expect(validURL('#*$&%^#*$_')).toBeFalsy()
    })

    test('checkUrl return true for valid url', () => {
        expect(validURL('https://google.com')).toBeTruthy()
    })
})