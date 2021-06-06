import { printPort } from "../src/server/index";
import reg from "../src/server/index";

describe("Testing the api call functionality", () => {  
    test("Testing the callApi function", () => {
        expect(printPort).toBeDefined();
})});