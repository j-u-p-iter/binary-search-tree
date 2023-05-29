import { Queue } from '@j.u.p.iter/queue';

import { BinarySearchTreeNode } from "./BinarySearchTreeNode";

export class BinarySearchTree {
  /**
   * Holds the number of the nodes in the tree.
   *
   */
  private count: number = 0;

  /**
   * Holds the root node of the tree.
   *
   */
  private root: BinarySearchTreeNode | null = null;

  private setRoot(node: BinarySearchTreeNode | null) {
    this.root = node; 
  }

  contrustor() {}

  /**
   * Inserts new node for the tree.
   *
   */
  public insert(value) {
    const newNode = new BinarySearchTreeNode(value);

    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode.getValue() === currentNode.getValue()) {
        break;
      }

      if (newNode.getValue() < currentNode.getValue()) {
        if (currentNode.hasLeft()) {
          /**
           * Continue traversing to the left.
           *
           */ 
          currentNode = currentNode.getLeft();
        } else {
          /**
           * Sets up as left node for the current one
           *   and stops traversing.
           *
           */
          currentNode.setLeft(newNode.setParent(currentNode));
          this.count = this.count + 1;
          break;
        }
      } else {
        if (newNode.getValue() > currentNode.getValue()) {
          if (currentNode.hasRight()) {
            /**
             * Continue traversing to the right.
             *
             */ 
            currentNode = currentNode.getRight();
          } else {
            /**
             * Sets up as right node to the current one
             *   and stops traversing.
             *
             */
            currentNode.setRight(newNode.setParent(currentNode));
            this.count = this.count + 1;
            break;
          }
        }
      }
    }

    return this;
  }

  public find(value) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.getValue() === value) {
        return currentNode;
      }

      if (value < currentNode.getValue()) {
        if (currentNode.hasLeft()) {
          currentNode = currentNode.getLeft();
        } else {
          return null;
        }
      } else {
        if (value > currentNode.getValue()) {
          if (currentNode.hasRight()) {
            currentNode = currentNode.getRight();
          } else {
            return null;
          }
        }
      }
    }
  }

  /**
   * Checks if value exists 
   *   in the tree
   *
   */
  public hasValue(value): boolean {
    return this.find(value) !== null;
  }

  /**
   * Finds node with the maximum 
   *   value (the rightmost).
   *
   */
  public max(currentNode: BinarySearchTreeNode | null = this.root): BinarySearchTreeNode | null {
    if (currentNode === null) { return null; }

    if (currentNode.hasRight()) { return this.max(currentNode.getRight()); }

    return currentNode;
  } 

  /**
   * Finds node with the minimum
   *   value (the leftmost.
   *
   */
  public min(currentNode: BinarySearchTreeNode | null = this.root): BinarySearchTreeNode | null {
    if (currentNode === null) { return null; }

    if (currentNode.hasLeft()) { return this.min(currentNode.getLeft()); }

    return currentNode;
  }

  /**
   * Removes node from the tree.
   *
   */
  public remove(value) {
    const nodeToRemove = this.find(value);

    if (nodeToRemove === null) {
      return null;
    }

    /**
     * First case. Node does not have children.
     *
     */
    if (!nodeToRemove.hasLeft() && !nodeToRemove.hasRight()) {
      const parentNode = nodeToRemove.getParent();

      if (nodeToRemove.isRoot()) {
        this.clear();
      } else {
        if (parentNode.getValue() > value) {
          parentNode.setLeft(null);
        } else {
          parentNode.setRight(null);
        }
      }

      this.count--;

      return true;
    }

    /**
     * Second case. Node has left child and does not have 
     *   right child.
     *
     */
    if (!nodeToRemove.hasRight()) {
      const parentNode = nodeToRemove.getParent();

      if (nodeToRemove.isRoot()) {
        this.setRoot(nodeToRemove.getLeft());
      } else {
        if (parentNode.getValue() > value) {
          parentNode.setLeft(nodeToRemove.getLeft());
        } else {
          parentNode.setRight(nodeToRemove.getLeft());
        }
      }   
     
      this.count--;

      return true;
    }

    /**
     * Third case. Node has right child and does not have 
     *   left child.
     *
     */
    if (!nodeToRemove.hasLeft()) {
      const parentNode = nodeToRemove.getParent();

      if (nodeToRemove.isRoot()) {
        this.setRoot(nodeToRemove.getRight());
      } else {
        if (parentNode.getValue() > value) {
          parentNode.setLeft(nodeToRemove.getRight());
        } else {
          parentNode.setRight(nodeToRemove.getRight());
        }
      }
     
      this.count--;

      return true;
    }

    /**
     * Fourth case. Node has both children - left and right.
     *
     */
    const minNode = this.min(nodeToRemove.getRight());  

    this.remove(minNode.getValue());

    nodeToRemove.setValue(minNode.getValue());

    return true;
  }

  /**
   * Clears the tree.
   *
   */
  public clear() {
    this.count = 0;
    this.root = null;
  }

  public getRoot(): BinarySearchTreeNode | null {
    return this.root;
  }

  /**
   * Traverses the tree in a 
   *   breadth-first fashion.
   *
   */
  public traverseBreadthFirst(callback: (node: BinarySearchTreeNode) => void) {
    const queue = new Queue();  

    queue.enqueue(this.root);

    while(!queue.isEmpty()) {
      const nodeFromQueue = queue.dequeue().getValue();

      if (nodeFromQueue.hasLeft()) {
        queue.enqueue(
          nodeFromQueue.getLeft()
        );
      }

      if (nodeFromQueue.hasRight()) {
        queue.enqueue(
          nodeFromQueue.getRight()
        );
      }

      callback(nodeFromQueue);
    }
  }

  /**
   * Prints the tree in a 
   *   breadth-first fashion.
   *
   */
  public printBreadthFirst() {
    const visitedNodesValues = [] 

    this.traverseBreadthFirst((node) => {
      visitedNodesValues.push(node.getValue()); 
    });

    return visitedNodesValues;
  }
}
