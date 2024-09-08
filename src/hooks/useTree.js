import { v4 as uuidv4 } from "uuid";

const useTree = (tree) => {
  const insertNode = (parent_id, name, isFolder) => {
    if (!tree.isFolder) return tree;
    if (tree.id === parent_id) {
      tree.children.push({
        name: name,
        id: uuidv4(),
        isFolder: isFolder,
        children: [],
      });
    } else {
      var latest_node = [];
      for (let i = 0; i < tree.children.length; i++) {
        latest_node.push(insertNode(tree.children[i], tree.id, name, isFolder));
      }
    }
    return { ...tree, children: latest_node };
  };
  const deleteNode = (tree, node_id) => {
    // if (tree.findIndex((child) => child.id === node_id) !== -1) {
    //   tree.children.filter((child) => child.id !== node_id);
    //   return tree.children;
    // } else {
    // }
  };
  const renameNode = () => {};
  return [insertNode, deleteNode, renameNode];
};

export default useTree;
