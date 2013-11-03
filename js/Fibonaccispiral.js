/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 13-11-1
 * Time: 下午3:22
 * To change this template use File | Settings | File Templates.
 */
var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 800;


var radius = 20;
var context = canvas.getContext("2d");

if (canvas.getContext) {
    var context = canvas.getContext("2d");
    var i = 1;
    var j = 1;
    var radius = 10;
    originx = 400;
    originy = 400;
    var fib_var = [1, 1];
    var fibonacci_variable = 1;
    var spiral_circle = [
        [0, -Math.PI / 2],
        [-Math.PI / 2, -Math.PI],
        [-Math.PI, -3 * Math.PI / 2],
        [-3 * Math.PI / 2, -2 * Math.PI]
    ];


    function drawFibonaccispiral() {
        context.beginPath();
        context.arc(originx, originy, radius * fibonacci_variable, spiral_circle[(i - 1) % 4][0]+(j-1)*(spiral_circle[(i - 1) % 4][1]-spiral_circle[(i - 1) % 4][0])/50, spiral_circle[(i - 1) % 4][0]+j*(spiral_circle[(i - 1) % 4][1]-spiral_circle[(i - 1) % 4][0])/50, true);
        context.stroke();
        if (j >= 50) {
            if (i >= 2) {
                fib_var[0] = fib_var[1];
                fib_var[1] = fibonacci_variable;
                fibonacci_variable = fib_var[0] + fib_var[1];
                switch ((i + 1) % 4) {
                    case 0:
                        originx = originx;
                        originy = originy - radius * fib_var[0];
                        break;
                    case 1:
                        originx = originx - radius * fib_var[0];
                        originy = originy;
                        break;
                    case 2:
                        originx = originx;
                        originy = originy + radius * fib_var[0];
                        break;
                    case 3:
                        originx = originx + radius * fib_var[0];
                        originy = originy;
                        break;
                }
            }
            if (i >= 500) {
                clearInterval(h);
            }
            i++;
            j=0;
        }
        j++;
    }

    var h = window.setInterval("drawFibonaccispiral()", 10);



//    for (i = 1; i <= 10; i++) {
//        context.beginPath();
//
//        context.arc(originx, originy, radius * fibonacci_variable, spiral_circle[(i - 1) % 4][0], spiral_circle[(i - 1) % 4][1], true);
//        if (i >= 2) {
//            fib_var[0] = fib_var[1];
//            fib_var[1] = fibonacci_variable;
//            fibonacci_variable = fib_var[0] + fib_var[1];
//            switch ((i + 1) % 4) {
//                case 0:
//                    originx = originx;
//                    originy = originy - radius * fib_var[0];
//                    break;
//                case 1:
//                    originx = originx - radius * fib_var[0];
//                    originy = originy;
//                    break;
//                case 2:
//                    originx = originx;
//                    originy = originy + radius * fib_var[0];
//                    break;
//                case 3:
//                    originx = originx + radius * fib_var[0];
//                    originy = originy;
//                    break;
//            }
//        }
//        context.stroke();
//    }
}

//var i=1;
//function draw(){
//    context.arc(300,300,50,(i-1)*Math.PI*2/100,i*Math.PI*2/100);// 画正圆
//    context.stroke();
//    if (i>=100){
//       clearInterval(h);
//    }
//    i++;
//}
//var h= window.setInterval("draw()",50);


