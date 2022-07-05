function mostBalancedPartition(parent, files_size) {
    // Write your code here
    function getSize(root, parent, files_size){
        let size = files_size[root];
        for(let i = 0; i < parent.length; i++){
            if(parent[i] == root){
                size = size + getSize(i, parent, files_size);
            }
        }
        return size;
    }
    let minSize = -1;//init
    for(let i = 1; i < parent.length; i++){
        let subP1 = parent.map((x) => x);
        subP1[i] = -1;
        let size1 = getSize(0, subP1, files_size);
        let size2 = getSize(i, subP1, files_size);

// console.log(subP1 + " s1 " +size1 + " s2="+size2);

        let s1s2 = Math.abs(size1-size2);
        if (minSize == -1 || s1s2 < minSize){
            minSize = s1s2;
        }
        if(minSize == 0){return 0}
    }
    return minSize;
}

// const p = [-1, 0, 1, 2];
// const s = [ 1, 4, 3, 4];

const p = [-1, 0, 0, 1, 1, 2];
const s = [ 1, 2, 2, 1, 1, 1];

console.log(mostBalancedPartition(p,s));