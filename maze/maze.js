var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];//1,1  end:8,10

//object oriented
class Point{
  constructor(_row, _col){
    this.row = _row;
    this.col = _col;
  }
  isEnd = function(){
    return this.row==end.row && this.col==end.col
  }
}
var start= new Point(1,1);//{row:1,col:1}
var end = new Point(8,10);//[8,10]
var Stack=[];
var step = start;
var rollBack=false;

function go(){
     Stack.push(step);
    
     while(! step.isEnd()){
        MAZE[step.row][step.col]=2;
        //up
        if(MAZE[step.row-1][step.col] == 0)
        {
            if(rollBack)
                {
                    Stack.push(step);
                    rollBack=false;
                }
            step = new Point(step.row-1, step.col);
            Stack.push(step);
           
        }else if(MAZE[step.row+1][step.col]==0)
        {   step = new Point(step.row+1, step.col);
            
            Stack.push(step); //down
            
            rollBack=false;

        }
        else if(MAZE[step.row][step.col-1]==0)
        { step = new Point(step.row, step.col-1);
            
            Stack.push(step); //left
            
            rollBack=false;

        }
        else if(MAZE[step.row][step.col+1]==0)
        {step = new Point(step.row, step.col+1);
            
            Stack.push(step)//right
            
            rollBack=false;

        }
        else{
            if(Stack.length>0){
              step = Stack.pop();
            rollBack = true;}
            else
            break;
              //no solution
        }
     }
     if(Stack.length>0)
        console.log("Done!");                                                                                                   
     else 
        console.log("No solution!");
}
go()




     