import { BinarySearchTreeNode } from "./BinarySearchTreeNode";

export class BinarySearchTree {
  /**
   * Holds the number of nodes in the tree.
   *
   */
  private count: number = 0;

  /**
   * Holds the root node of a tree.
   *
   */
  private root: BinarySearchTreeNode | null = null;

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
           */ currentNode = currentNode.getLeft();
        } else {
          /**
           * Sets up as left node to the current one
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
             */ currentNode = currentNode.getRight();
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
            currentNode = currentNode.getLeft();
          } else {
            return null;
          }
        }
      }
    }
  }

  public hasValue(value) {
    return this.find(value) !== null;
  }

  /**
   * Clears the tree.
   *
   */
  public clear() {
    this.count = 0;
    this.root = null;
  }
}
