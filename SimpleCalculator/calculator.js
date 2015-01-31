var expression = "";

window.onload = function(){
  addEventHandlersToNumbersAndOperators();
  addEventHandlersToFunctionButtons();
}

function addEventHandlersToNumbersAndOperators(){
  var ids = getIdsOfNumbersAndOperators();
  for (var i = ids.length - 1; i >= 0; i--) {
    document.getElementById(ids[i]).onclick = appendToExpression;
  }
}

function getIdsOfNumbersAndOperators(){
  var ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  ids = ids.concat(['add', 'sub', 'mul', 'div', 'dot', 'left_p', 'right_p']);
  return ids;
}

function appendToExpression(event){
  expression += event.target.textContent;
	updateOutput(expression);
}

function addEventHandlersToFunctionButtons(){
  document.getElementById("eq").onclick = showResult;
  document.getElementById("ce").onclick = clearOutput;
  document.getElementById("back").onclick = backDelete;
}

function showResult(){
  // eval 函数参见http://www.w3school.com.cn/jsref/jsref_eval.asp
  try {
  	var result = eval(expression);
		updateOutput(result);
		expression = "";
  } 
  catch (e) {
  	alert("'" + expression + "' is invalid.");
  }
}

function updateOutput(data){
	document.getElementById("output").value = data;
}

function clearOutput(){
	expression = "";
	updateOutput(expression);
}

function backDelete(){
	expression = expression.substring(0, expression.length - 1);
	updateOutput(expression);
}
