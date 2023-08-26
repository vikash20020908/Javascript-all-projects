
function Increment() 
{
	var number = Number(document.getElementById('number').innerHTML)

	document.getElementById('number').innerHTML=number+1
}
function Decrement()
{
	var number = Number(document.getElementById('number').innerHTML)

	document.getElementById('number').innerHTML=number-1

}
function Neutral()
{
document.getElementById('number').innerHTML=0

}