import { expect } from 'chai'
import { add } from '../modules/math.js'

describe('Add Function', () => {
    it('should return the sum of two numbers', () => {
        expect(add(2, 3)).to.equal(5); // Esperamos que add(2, 3) retorne 5
    });
});
