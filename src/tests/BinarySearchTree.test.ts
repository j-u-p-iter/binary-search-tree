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
     *          50
     *        /    \
     *      30      70
     *     /  \    /  \
     *    20   40  60   80 
     *        /      \
     *      32        65
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

      tree.insert(32)
      tree.insert(65)

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

  describe('traverseBreadthFirst method', () => {
    it('traverses nodes properly', () => {
      const tree = createBST();

      const traversedNodesValues = []; 

      tree.traverseBreadthFirst((node) => {
        return traversedNodesValues.push(node.getValue());
      });

      expect(traversedNodesValues).toEqual([50, 30, 70, 20, 40, 60, 80, 32, 65]);
    });
  });

  describe('printBreadthFirst method', () => {
    it('returns traversed in a breadth first fashion nodes values', () => {
      const tree = createBST();

      const traversedNodesValues = tree.printBreadthFirst();

      expect(traversedNodesValues).toEqual([50, 30, 70, 20, 40, 60, 80, 32, 65]);
    });
  });

  describe('remove method', () => {
    it('removed node does not have children', () => {
      const tree = createBST();

      tree.remove(20);

      const traversedNodesValues = tree.printBreadthFirst();

      expect(traversedNodesValues).toEqual([50, 30, 70, 40, 60, 80, 32, 65]);
    });

    it('removed node has left child and does not have right child', () => {
      const tree = createBST();

      tree.remove(40);

      const traversedNodesValues = tree.printBreadthFirst();

      expect(traversedNodesValues).toEqual([50, 30, 70, 20, 32, 60, 80, 65]);
    });

    it('removed node has right child and does not have left child', () => {
      const tree = createBST();

      tree.remove(60);

      const traversedNodesValues = tree.printBreadthFirst();

      expect(traversedNodesValues).toEqual([50, 30, 70, 20, 40, 65, 80, 32]);
    });

    it('removed node has both children', () => {
      const tree = createBST();

      tree.remove(30);

      const traversedNodesValues = tree.printBreadthFirst();

      expect(traversedNodesValues).toEqual([50, 32, 70, 20, 40, 60, 80, 65]);
    });
  });
});
