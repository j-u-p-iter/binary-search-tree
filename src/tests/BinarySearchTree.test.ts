import { BinarySearchTree, BinarySearchTreeNode } from '../index';

/**
 * To write proper assertions we need at first
 * implement the methods to traverse + print 
 * the nodes of the tre.
 *
 */

/**
 * Here you'll find a lot of different implementations (Easy, Medium, Advanced)
 *   you should implement in your version of the BST:
 *   https://www.geeksforgeeks.org/binary-search-tree-data-structure/
 */

describe('BinarySearchTree', () => {
  let createBST;

  beforeAll(() => {
    /**
     * Creates following BST:
     *        50
     *      /    \
     *    30      70
     *   /  \    /  \
     *  20   40  60   80 
     */
    createBST = () => {
      const tree = new BinarySearchTree();

      // inserts root node
      tree.insert(50);

      // inserts node on the second level 
      tree.insert(30)
      tree.insert(70)

      // inserts node on the third level
      tree.insert(20)
      tree.insert(40)

      tree.insert(60)
      tree.insert(80)

      return tree;
    }
  });

  describe('hasValue', () => {
    it('checks the presence of the node in the tree by value', () => {
      const tree = createBST();

      expect(tree.hasValue(20)).toBe(true);
      expect(tree.hasValue(90)).toBe(false);
    })
  });

  describe('max', () => {
    describe('without passing node as an argument', () => {
      it('returns node with the maximum value starting from the root node', () => {
        const tree = createBST();

        expect(tree.max().getValue()).toBe(80);
      })
    })

    describe('when the node passed as an argument', () => {
      it('returns node with the maximum value starting from the passed node', () => {
        const tree = createBST();

        expect(tree.max(new BinarySearchTreeNode(30)).getValue()).toBe(30);
      });
    });
  });

  describe('min', () => {
    describe('without passing node as an argument', () => {
      it('returns node with the minumum value starting from the root node', () => {
        const tree = createBST();

        expect(tree.min().getValue()).toBe(20);
      });
    });

    describe('when node passed as an argument', () => {
      it('returns node with the maximum value starting from the passed node', () => {
        const tree = createBST();

        expect(tree.min(new BinarySearchTreeNode(40)).getValue()).toBe(40);
      });
    });
  });
});
