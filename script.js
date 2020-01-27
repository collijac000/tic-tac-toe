

X=true;
let addClass=function(id){
  id.classList.add("wow")


};




let createTable=function(){



  let table=document.createElement("TABLE");
  let row1=document.createElement("TR");
  let row2=document.createElement("TR");
  let row3=document.createElement("TR");
  let row4=document.createElement("TR");
  let colHeading1=document.createElement("TH");
  let colHeading2=document.createElement("TH");
  let colHeading3=document.createElement("TH");
  let colHeading4=document.createElement("TH");
  let rowHeading2=document.createElement("TH");
  let rowHeading3= document.createElement("TH");
  let rowHeading4= document.createElement("TH");
  let data1=document.createElement("TD");
  let data2=document.createElement("TD");
  let data3=document.createElement("TD");
  let data4=document.createElement("TD");
  let data5=document.createElement("TD");
  let data6=document.createElement("TD");
  let data7=document.createElement("TD");
  let data8=document.createElement("TD");
  let data9=document.createElement("TD");
  data1.innerText="a";
  data2.innerText="b";
  data3.innerText="c";
  data4.innerText="d";
  data5.innerText="e";
  data6.innerText="f";
  data7.innerText="g";
  data8.innerText="h";
  data9.innerText="i";

  //create the table with appendages

  row1.appendChild(colHeading1);
  row1.appendChild(colHeading2);
  row1.appendChild(colHeading3);
  row1.appendChild(colHeading4);

  row2.appendChild(rowHeading2);
  row2.appendChild(data1);
  row2.appendChild(data2);
  row2.appendChild(data3);

  row3.appendChild(rowHeading3);
  row3.appendChild(data4);
  row3.appendChild(data5);
  row3.appendChild(data6);

  row4.appendChild(rowHeading4);
  row4.appendChild(data7);
  row4.appendChild(data8);
  row4.appendChild(data9);

  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);
  table.appendChild(row4);

  let content=document.getElementById("content");
  content.appendChild(table);
  table.style.borderCollapse="collapse";
  table.style.border="1px solid black";
  table.style.border="1px solid black";
  table.style.border="1px solid black";
};






let togglePlayers=function(){
  if(X==true){
      //hover x
  }else{
      //hover o
  }

};
//row== up and down collum== left and right

//first step=table
//second step click on cell x and o show onkeyup
//toggle between x and o
//hover stuffs