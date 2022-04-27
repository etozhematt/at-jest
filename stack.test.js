import makeStack from "../src/stack.js";

test("isEmpty", () => {
    const stack = makeStack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
});

test("stacksMainFlow", () => {
    const stack = makeStack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
});

test("emptyStack", () => {
   const stack = makeStack();
    expect(() => stack.pop()).toThrow();
});
