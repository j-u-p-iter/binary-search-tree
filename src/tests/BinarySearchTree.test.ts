import { BinarySearchTree } from '../index';

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

  });
  it('works properly', () => {
    
  });
});
