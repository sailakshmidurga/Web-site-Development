function grid_making()
{
  let table = document.createElement("table");
  // let table = document.getElementsByTagName("table")[0];
  table.setAttribute("border","2");
  let container = document.createElement("div");
  container.setAttribute("style","display:flex;justify-content:center;");
let rows = document.getElementsByTagName("input")[0].value;
let columns = document.getElementsByTagName("input")[1].value;
for(var i = 0;i<rows;i++)
{
   let newRow = document.createElement("tr");
  for(var j = 0;j<columns;j++)
  {
     var cell = document.createElement("td");
     cell.setAttribute("style","width:100px;height:100px;")
     if(i==0 && j == 0)
     {
      let image = document.createElement("img");
      image.setAttribute("src","../Task/king_chess.png");
       image.setAttribute("style","width:100%;height:auto; display:block;");
      cell.append(image);
      
      // image.setAttribute("style","position:absolute;")
     }
     if(i%2!=0 && j%2!=0)
    {
      cell.setAttribute("style","background-color:black;");
    }
    else if(i%2==0 && j%2==0){
      cell.setAttribute("style","background-color:black;");
    }
     newRow.appendChild(cell);
  }
  table.appendChild(newRow);
}
table.setAttribute("width","50%");
table.setAttribute("cellpadding","50");
container.appendChild(table);
let parent = document.getElementsByTagName("body")[0];
parent.appendChild(container);

}