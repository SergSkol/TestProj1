//Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        let queue = [];
        queue.push(root);
        //console.log("root "+queue);
        while(queue.length>0){
            el = queue.shift();
            
            console.log(el.data+" ");
            if(el.left !== null){queue.push(el.left)};
            if(el.right !== null){queue.push(el.right)};
        }
	}; // End of function levelOrder
}; // End of function BinarySearchTree

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

var _input = `3
5
4
7
2
1`;

// process.stdin.on('data', function (data) {
//     _input += data;
// });

// process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
// });