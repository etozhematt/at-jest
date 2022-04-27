import makeStack from '../src/stack.js';

const stack = makeStack();
stack.isEmpty();
stack.push(1);
stack.push(2);
stack.push(3);
stack.isEmpty();
stack.pop();
stack.pop();
stack.pop();
stack.isEmpty();
