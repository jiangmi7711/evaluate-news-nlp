import { checkForUrl } from '../src/client/js/urlChecker';
describe ('check Name', () => {
    test ('should return true', () => {
        const url='https://google.com'
        expect (checkForUrl(url)).toBe(true)
    });
    test("should return false", () => {
    	const url = "google . com";
    	expect(checkForUrl(url)).toBe(false);
  });
});