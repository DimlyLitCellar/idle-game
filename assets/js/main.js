totalSquares = 0;
totalSquaresEl = document.getElementById('total-squares');
function squares(n) {
	totalSquares += n;
	totalSquaresEl.innerHTML = totalSquares;
}