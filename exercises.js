//   isAnagram

var isAnagram=function(s, t) {
  let str1 = s.split('').sort().join('');
  let str2 = t.split('').sort().join('');
  if(str1 === str2){
     console.log("true");
  } else { 
     console.log("false");
  }
}



  //containsDuplicate

  var containsDuplicate = function(nums) {
    nums.sort();
    for (i = 1; i < nums.length; i++){
        if (nums[i] == nums[i - 1]){
            return true;
        }   
    }
    return false;
};



// maximumProduct

var maximumProduct=function(nums){
  let maxpr=1;
  for(let nums of num){
    maxpr=maxpr*nums;
  }
  return maxpr;
}



//guessNumber

var guessNumber = function(n) {
  let start = 1;
  let end = n;

  while (start <= end) {
      let middle = Math.floor((start + end)/2);
      if (guess(middle) === 0) {
          return middle;
      } 
      else if (guess(middle) === 1) {
          start = middle + 1;
      }
      else {
          end = middle - 1;
      }
  } return false;
};


//backspaceCompare

var backspaceCompare = function(s, t) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
        arr1.pop();
      } else {
        arr1.push(s[i]);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (t[i] === "#") {
        arr2.pop();
      } else {
        arr2.push(t[i]);
      }
    }
    arr1 = arr1.join("");
    arr2 = arr2.join("");
    return arr1===arr2;
  }











//evalRPN

var evalRPN = function (tokens) {
    var stack = [];
    let first = 0;
    let second = 0;
    let division = 0;
    let temp = '';
    for (let i = 0; i < tokens.length; i++) {
      temp = tokens[i];
      switch (temp) {
        case '+':
          stack.push(stack.pop() + stack.pop());
          break;
        case '-':
          first = stack.pop();
          second = stack.pop();
          stack.push(second - first);
          break;
        case '*':
          stack.push(stack.pop() * stack.pop());
          break;
        case '/':
          first = stack.pop();
          second = stack.pop();
          division = second / first;
          if (division > 0) {
            stack.push(Math.floor(division))
          } else {
            stack.push(Math.ceil(division))
          }
          break;
        default:
          stack.push(Number(temp));
      }
    }
    return stack.pop();
  };

  //FirstBadVersion
  var solution = function (isBadVersion) {
    return function (n) {
        let start = 1;
        let end = n;
        while (start < end) {
            const mid = start + Math.floor((end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};




//inorderTraversal

var inorderTraversal = function (root) {
    var result = [];
    inorder(root, result);
    return result;
};


//inorder
var inorder = function (root, result) {
    if (root == null) {
        return;
    }
    if (root.left) {
        inorder(root.left, result);
    }
    result.push(root.val);
    if (root.right) {
        inorder(root.right, result);
    }
};



//invertTree

var invertTree = function (root) {
    if (root == null) {
        return root;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;

};


//isSymmetric

var isSymmetric=function(root){
    let result=true;
    function mirror(node1,node2){
        if(!node1&&!node2){
            return;
        }
        if(!node1||!node2||node1.val!==node2.val){
            result=false;
            return;     
        }
        mirror(node1.left,node2.right);
        mirror(node1.right,node2.left);
    }
    mirror(root,root);
    return result;
}



//isValid

var isValid = function(s) {
    const newArr = [];
  
    for (let i = 0; i < s.length; i ++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        newArr.push(s[i]);
      } else if (s[i] === ')' && newArr[newArr.length - 1] === '(' && newArr.length !== 0) {
        newArr.pop();
      } else if (s[i] === ']' && newArr[newArr.length - 1] === '[' && newArr.length !== 0) {
        newArr.pop();
      } else if (s[i] === '}' && newArr[newArr.length - 1] === '{' && newArr.length !== 0) {
        newArr.pop();
      } else {
        return false;
      }
    }
    return newArr.length === 0;    
};







// mySqrt
var mySqrt = function(x) {
    if(x < 2) {
        return x;
     }
     let num = 1;
    while(num*num <= x) {
         num++;
    }
    return num-1;
}
 

//postorderTraversal

var postorderTraversal = function(root) {
    var result = [];
     postorder(root, result);
     return result;
 };

//postorder

 var postorder = function (root, result) {
     if (root == null) {
         return root
     } 
     postorder(root.left, result);
     postorder(root.right, result);  
     result.push(root.val);
};


//preorderTraversal

var preorderTraversal = function (root) {
    var result = [];
    preorder(root, result);
    return result;
};


//preorder
var preorder = function (root, result) {
    if (root == null) {
        return root
    } else {
        result.push(root.val);
    }
    preorder(root.left, result);
    preorder(root.right, result);
};




//searchRange

var searchRange = function (nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};




 
