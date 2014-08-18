require('./test_helper')

PriorityQueue = require('../src/PriorityQueue')
numberCompare = (a, b) -> a - b

describe 'PriorityQueue', ->
  it 'should have a BHeapStrategy', ->
    expect(PriorityQueue.BHeapStrategy).to.exist

  it 'should have a BinaryHeapStrategy', ->
    expect(PriorityQueue.BinaryHeapStrategy).to.exist

  it 'should have an ArrayStrategy', ->
    expect(PriorityQueue.ArrayStrategy).to.exist

  it 'should default to BinaryHeapStrategy', ->
    queue = new PriorityQueue(comparator: numberCompare)
    expect(queue.priv.constructor).to.eq(PriorityQueue.BinaryHeapStrategy)

  it 'should queue a default comparator', ->
    queue = new PriorityQueue(strategy: PriorityQueue.BinaryHeapStrategy)
    expect(queue.priv.comparator(2, 3)).to.equal(-1)

describe 'integration tests', ->
  beforeEach ->
    @queue = new PriorityQueue()

  it 'should stay sorted', ->
    @queue.queue(1)
    @queue.queue(3)
    @queue.queue(2)

    expect(@queue.dequeue()).to.equal(1)
    expect(@queue.dequeue()).to.equal(2)
    expect(@queue.dequeue()).to.equal(3)
