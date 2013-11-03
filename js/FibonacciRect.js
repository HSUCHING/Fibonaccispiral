/**
 * Created by Hsuching.Lord on 13-11-3.
 */


var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 800;

if (canvas.getContext) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle="blue";

    var i=1;
    originx=300;
    originy=300;
    var j=1;
    var fib_var=[1,1];
    for(i=1;i<=10;i++){
        context.moveTo(originx, originy);
        context.lineTo(originx, originy+j*fib_var[0]*10);
        context.moveTo(originx, originy+j*fib_var[0]*10);
        context.lineTo(originx+j*fib_var[1]*10, originy+j*fib_var[0]*10);
        originx=originx+j*fib_var[1]*10;
        originy=originy+j*fib_var[0]*10;
        fib_var[0]=fib_var[0]+fib_var[1];
        fib_var[1]=fib_var[0]+fib_var[1];
        console.log(fib_var[0]);
        console.log(fib_var[1]);
        j=(-1)*j;
    }



    context.lineWidth = 1;
//    context.strokeRect(300,300,10,10);
    context.stroke();

}
