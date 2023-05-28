export class BinarySearchTreeNode {
  /**
   * Holds the value of a node.
   *
   */
  private value: any;

  /**
   * Holds a child on a left side.
   *
   */
  private left: BinarySearchTreeNode | null = null;

  /**
   * Holds child on a right side.
   *
   */
  private right: BinarySearchTreeNode | null = null;

  /**
   * Holds parent node.
   *
   */
  private parent: BinarySearchTreeNode | null = null;

  /**
   * Checks if the node is valid.
   *
   */
  private isNodeValid(node: any) {
    return node === null || node instanceof BinarySearchTreeNode;
  }

  constructor(value: any) {
    this.setValue(value);
  }

  /**
   * Returns the node value
   *
   */
  public getValue() {
    return this.value;
  }

  /**
   * Sets the node value
   *
   */
  public setValue(value) {
    this.value = value;

    return this;
  }

  /**
   * Sets the parent node
   *
   */
  public setParent(node: BinarySearchTreeNode | null) {
    if (!this.isNodeValid(node)) {
      throw new Error("setParent expects a BinarySearchTreeNode or a null");
    }

    this.parent = node;

    return this;
  }

  /**
   * Sets the left child node
   *
   */
  public setLeft(node: BinarySearchTreeNode | null) {
    if (!this.isNodeValid(node)) {
      throw new Error("setLeft expects a BinarySearchTreeNode or a null");
    }

    this.left = node;

    return this;
  }

  /**
   * Sets the right child node
   *
   */
  public setRight(node: BinarySearchTreeNode | null) {
    if (!this.isNodeValid(node)) {
      throw new Error("setRight expects a BinarySearchTreeNode or a null");
    }

    this.right = node;

    return this;
  }

  /**
   * Checks if the current node is the root of the tree.
   *
   */
  public isRoot() {
    return this.parent === null;
  }

  /**
   * Returns the left child node.
   *
   */
  public getLeft(): BinarySearchTreeNode | null {
    return this.left;
  }

  /**
   * Returns the right child node.
   *
   */
  public getRight(): BinarySearchTreeNode | null {
    return this.right;
  }

  public getParent(): BinarySearchTreeNode | null {
    return this.parent;
  }

  public hasLeft(): boolean {
    return this.left instanceof BinarySearchTreeNode;
  }

  public hasRight(): boolean {
    return this.right instanceof BinarySearchTreeNode;
  }
}
