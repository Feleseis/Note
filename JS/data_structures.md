## 二叉树和二叉查找树
* Node类的定义
```javascript
function Node(data, left, right) {
  this._data = data;
  this._left = left;
  this._right = right;
  this.show = show;
}
function show() {
  return this._data;
}
```
* 查找正确插入点的算法
  - 设根节点为当前节点。
  - 如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反
  之，执行第 4 步。
  - 如果当前节点的左节点为 null，就将新的节点插入这个位置，退出循环；反之，继续
  执行下一次循环。
  - 设新的当前节点为原节点的右节点。
  - 如果当前节点的右节点为 null，就将新的节点插入这个位置，退出循环；反之，继续
  执行下一次循环。
* BST类的定义
```javascript
function BST() {
  tthis._root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMinData = getMinData;
  this.getMaxData = getMaxData;
  this.find = find;
  this.remove = remove;
  this.update = update;
}
```
* 插入节点
```javascript
function insert(data) {
  var nNode = new Node(data, null, null);
  if (this._root == null) {
    this._root = nNode;
  } else {
    var nCurrent = this._root;
    var nParent;
    while (true) {
      nParent = nCurrent;
      if (data < nCurrent._data) {
        nCurrent = nCurrent._left;
        if (nCurrent == null) {
          nParent._left = nNode;
          break;
        }
      } else {
        nCurrent = nCurrent._right;
        if (nCurrent == null) {
          nParent._right = nNode;
          break;
        }
      }
    }
  }
}
```
* 遍历二叉查找树
- 中序——中序遍历按照节点上的键值，以升序访问BST上的所有节点
```javascript
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node._left);
    console.log(node.show() + ' ');
    inOrder(node._right);
  }
}
```
- 先序——先序遍历先访问根节点，然后以同样方式访问左子树和右子树
```javascript
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + ' ');
    preOrder(node._left);
    preOrder(node._right);
  }
}
```
- 后序——后序遍历先访问叶子节点，从左子树到右子树，再到根节点
```javascript
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node._left);
    postOrder(node._right);
    console.log(node.show() + ' ');
  }
}
```
* 二叉查找树上进行查找
- 对BST常用查找类型
- 查找给定值
```javascript
function findData(data) {
  var nCurrent = this._root;
  while (nCurrent != null) {
    if (nCurrent._data == data) {
      return nCurrent;
    } else if (data < nCurrent._data) {
      nCurrent = nCurrent._left;
    } else {
      nCurrent = nCurrent._right;
    }
  }
  return null;
}
```
- 查找最小值
```javascript
function getMinData() {
  var nCurrent = this._root;
  while (!(nCurrent._left == null)) {
    nCurrent = nCurrent._left;
  }
  return nCurrent._data;
}
```
- 查找最大值
```javascript
function getMaxData() {
  var nCurrent = this._root;
  while (!(nCurrent._right == null)) {
    nCurrent = nCurrent._right;
  }
  return nCurrent._data;
}
```
* 从二叉查找树上删除节点
```javascript
function remove(data) {
  this._root = removeNode(this._root, data);
}
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node._data) {
    //没有子节点的节点
    if (node._left == null && node._right == null) {
      return null;
    }
    //没有左子节点的节点
    if (node._left == null) {
      return node._right;
    }
    //没有右子节点的节点
    if (node._right == null) {
      return node._left;
    }
    //有两个子节点的节点
    var nTempNode = minNode(node._right);
    node._data = nTempNode._data;
    node._right = removeNode(node._right, nTempNode._data);
    return node;
  } else if (data < node._data) {
    node._left = removeNode(node._left, data);
    return node;
  } else {
    node._right = removeNode(node._right, data);
    return node;
  }
}
```
* 计数
```javascript
function update(data) {
  var nGrade = this.findData(data);
  nGrade._count++;
  return nGrade;
}
```
