function slicearray(){
    let array = [1, 2, 3];
    array.splice(0,1);
    console.log(array);
    array.splice(0,1);
    console.log(array);
};

slicearray();