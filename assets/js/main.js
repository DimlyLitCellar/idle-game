totalBlobs = 0;

totalBlobsEl = document.getElementById('total-blobs');
function blobs(n) {
	totalBlobs += n;
	totalBlobsEl.innerHTML = totalBlobs;
}

// Equation: Price=BaseCost×1.15^(#Owned)

// for clicking blob
clickPower = 1;

redBlob = document.getElementById("redBlob");
redBlob.addEventListener("click", function() {
	blobs(clickPower);
})

// for clicking power up
powerUpCostEl = document.getElementById("powerUpCost");
powerUpLevelEl = document.getElementById("powerUpLevel");
powerUpBuyOneEl = document.getElementById("powerUpBuyOne");

powerUpLevel = 0;
powerUpBuyOneEl.addEventListener("click", function() {
	price = Math.floor(10 * Math.pow(1.1, powerUpLevel));
	if(totalBlobs >= price) {
		clickPower ++;
		powerUpLevel++;
		totalBlobs -= price;
		powerUpLevelEl.innerHTML = powerUpLevel;
		totalBlobsEl.innerHTML = totalBlobs;
		powerUpCostEl = Math.floor(10 * Math.pow(1.1, powerUpLevel));
	}
});


// increments
window.setInterval(function(){
	
	
}, 1000);