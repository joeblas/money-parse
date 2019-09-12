import { Greeter } from '../index'

test('My greeter', () => {
  expect(Greeter('Joe')).toBe('Hello Joe')
})