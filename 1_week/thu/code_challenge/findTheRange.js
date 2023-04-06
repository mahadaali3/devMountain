function findTheRange(arr){
    arr.sort()
    console.log(arr[0] + ", " + arr[arr.length-1])
  }
  
  findTheRange([1,5,6,8])
  
  function findTheRange2(arr){
    let smallest = arr[0];
    let largest = arr[0];
    for(let i=1; i < arr.length; i++){
      if(arr[i] > largest){
        largest = arr[i]
      }
      if(arr[i] < smallest){
        smallest = arr[i]
      }
      
    }
      console.log(smallest+ ", " + largest)
  }
  
  findTheRange2([1,2,5,10])