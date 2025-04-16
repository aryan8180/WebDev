const numbers = [10, 20, 30, 40];
numbers[3] = 99;
console.log(numbers);  // [10, 20, 30, 99]

function getLastValue(nums) {
    console.log(nums[nums.length - 1]);
}

function arraySwap(heights) {
    const firstIndex = 0;
    const lastIndex = heights.length - 1;

    let temp = heights[firstIndex];
    heights[firstIndex] = heights[lastIndex];
    heights[lastIndex] = temp;

    return heights;
}

const nums = [10, 20, 30];
getLastValue(nums);  // 30

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
getLastValue(weekdays);  // Friday

const heights = [141, 153, 143, 160, 172];
console.log('Before swap:', heights);
console.log('After swap:', arraySwap(heights));

for(let i=0;i<=10;i+=2){
    console.log(i);
}

for(let i=5;i>0;i--){
    console.log(i);
}

let i=0;
while(i<=10){
    console.log(i);
    i+=2;
}

i = 5;
while(i>=0){
    console.log(i);
    i--;
}

function incrementer(num){
    const numb = [];
    for(let i=0;i<num.length;i++){
        numb.push(num[i]+1);
    }
    return numb;
}

const num = [1,2,3];
console.log(`Before increment: ${num}`);
console.log(`After increment: ${incrementer(num)}`);
