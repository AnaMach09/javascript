    // 1 amocana
    let user = {
        firstname: "giorgi",
        lastname: "smith",
        age: 25,
        studentstatus: "active"
    };
            console.log(user["studentstatus"]);  

    // 2 amocana
    let names = ["ana","giorgi", "mariami","sandro","dato"]

        for (let x = 0; x < names.length; x++) {
            console.log(names[x]);
    }
    let z = 0;
        while(z < names.length) {
     console.log(names[z]);
     z++;
    }
    //  3 amocana
    let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
        for(let item of numbers) {
        if (item > 5) {
             console.log(item);
    }}

    // 4 amocana
    let User = {
        name: 'giorgi',
        age:  20,
        studentstatus: 'active'
    }
    let item = User.age;
    let x = User.studentstatus;
    if (item < 18 && x == "active"){
        console.log("hello")
    };
    let i = User.studentstatus;
    let y = User.age;
    if (y < 25 || i == "active"){
        console.log("hello world")
    }
    let a = User.name;
    if (a = "levani"){
        console.log("hello levani")
    }
    else {
        console.log(error)
    };
    


    //  5 amocana
    let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
    for (let word of array ){
        if (typeof word=="string"){
            console.log(word)
        }
    }
    
     
    // 6 amocana
    
    let arrAy = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
    

    
    

      
    // 7 amocana
    let aRray = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
    for (let y of aRray) {
           if (y % 2 != 1) {
            console.log(y);
            }
    };
    let arRay = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
    for (let y of arRay) {
           if (y % 2 == 1) {
            console.log(y);
            }
    }

    // 8 amocana
    let users = [
        {username: 'giorgi', status: false},
        {username: 'levani', status: false},
        {username: 'anna', status: true}]
        console.log(users[2].status);

    
      

 
    

    
