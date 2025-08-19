const radius=[1,2,3,4];
const area=function(radius)
{
    return Math.PI*radius*radius;
};
const bc=function(radius,logic)
{  const output=[];
    for(let i=0;i<radius.length;i++)
    { output.push(logic(radius[i]));

    }
    return output;
};
console.log(bc(radius,area));
