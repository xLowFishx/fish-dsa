export default function inorderTraversal(root) {
  const values = [];

  function traverse(node) {
    if (node === null) {
      return;
    }

    traverse(node.left);
    values.push(node.value);
    traverse(node.right);
  }

  traverse(root);

  return values;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const sampleTree = {
    value: 1,
    left: null,
    right: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    }
  };

  console.log("inorderTraversal(sampleTree) =", inorderTraversal(sampleTree));
}
