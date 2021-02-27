class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }
    shiftUp(index) {
        if (index == 0) return;
        let parent = this.getParentIndex(index);
        if (this.heap[parent] > this.heap[index]) {
            this.swap(parent, index);
            this.shiftUp(parent);
        }
    }
    swap(parenti, soni) {
        this.heap[parenti] += this.heap[soni];
        this.heap[soni] = this.heap[parenti] - this.heap[soni];
        this.heap[parenti] -= this.heap[soni];
    }
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    getLength() {
        return this.heap.length;
    }
    getPeek() {
        return this.heap[0];
    }
    shiftDown(i) {
        let left = this.getLeftIndex(i);
        let right = this.getRightIndex(i);
        if (this.heap[left] < this.heap[i]) {
            this.swap(i, left);
            this.shiftDown(left);
        }
        if (this.heap[right] < this.heap[i]) {
            this.swap(i, right);
            this.shiftDown(right);
        }
    }
    getParentIndex(i) {
        return (i - 1) >> 1;
    }
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    getRightIndex(i) {
        return i * 2 + 2;
    }

}
// let h = new MinHeap();
// h.insert(10);
// h.insert(1);
// h.insert(7);
// h.insert(9);
// h.insert(101);
// console.log(h.heap);
// h.pop();
// console.log(h.heap);
// h.pop();
// console.log(h.heap);
// h.pop();
// console.log(h.heap);