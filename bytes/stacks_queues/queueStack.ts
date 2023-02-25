// Design a class to implement a stack using only a single queue.
// Your class, QueueStack, should support the following stack methods:
// 1. push() (adding an item),
// 2. pop() (removing an item),
// 3. peek() (returning the top value without removing it),
// 4. and empty() (whether or not the stack is empty).

class QueueStack {
  queue: number[] = []

  push(val: number): void {
    this.queue.push(val)
  }

  pop(): number {
    let i = 0
    while (i < this.queue.length - 1) {
      this.queue.push(this.queue.shift()!)
      i++
    }
    return this.queue.shift()!
  }

  peek(): number {
    return this.queue[this.queue.length - 1]
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}

const queueStack = new QueueStack()
queueStack.push(1)
queueStack.push(2)
queueStack.push(3)
console.log(queueStack.peek())
console.log(queueStack.pop())
console.log(queueStack.empty())
console.log(queueStack.peek())
