// Fibonacci Series Using DP (Memoization)

// Time Complexity : O(N)
// Space Complexity : O(N) + O(N)
//            Recursion Stack Space  +  Size Of Array

function f(n, dp){
    if(n <= 1) return n;
    
    if(dp[n] !== -1) return dp[n];

    return dp[n] = f(n - 1, dp) + f(n - 2, dp);
}


function fibonacci(n){
    let dp = new Array(n + 1).fill(-1);
    return f(n, dp);
}

let n = 6;

console.log(fibonacci(n));


// ----------------(Bottom to Top)--------------

// Time Complexity : O(N)
// Space Complexity : O(N) 
//              Size Of Array



function fibonacci2(n){
    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp;
}

console.log(fibonacci2(n));



// --------------Removing Extra Space-----------

// Time Complexity : O(N)
// Space Complexity : O(1) 



function fibonacci3(n){
    let prev2 = 0;
    let prev = 1;
    for(let i = 2; i <= n; i++){
        let curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}


console.log(fibonacci3(n));