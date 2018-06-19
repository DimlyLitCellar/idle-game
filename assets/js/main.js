totalBlobs = 0;

totalBlobsEl = document.getElementById('total-blobs');
function blobs(n) {
	totalBlobs += n;
	totalBlobsEl.innerHTML = totalBlobs;
}

// Equation: Price=BaseCost×1.15^(#Owned)

// for showing click power
clickPower = 1;
clickPowerEl = document.getElementById("clickPower");
clickPowerEl.innerHTML = clickPower;

// for clicking blob
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
		clickPowerEl.innerHTML = clickPower;
		powerUpLevelEl.innerHTML = powerUpLevel;
		totalBlobsEl.innerHTML = totalBlobs;
		powerUpCostEl.innerHTML = Math.floor(10 * Math.pow(1.1, powerUpLevel));
	}
});

//for workers
miniBlobWorkerCostEl = document.getElementById("miniBlobWorkerCost");
miniBlobWorkerAmountEl = document.getElementById("miniBlobWorkerAmount");
miniBlobWorkerBuyOneEl = document.getElementById("miniBlobWorkerBuyOne");

miniBlobWorkerAmount = 0;
miniBlobWorkerBuyOneEl.addEventListener("click", function() {
	price = Math.floor(20 * Math.pow(1.1, miniBlobWorkerAmount));
	if(totalBlobs >= price) {
		miniBlobWorkerAmount++;
		totalBlobs -= price;
		miniBlobWorkerAmountEl.innerHTML = miniBlobWorkerAmount;
		totalBlobsEl.innerHTML = totalBlobs;
		miniBlobWorkerCostEl.innerHTML = Math.floor(20 * Math.pow(1.1, miniBlobWorkerAmount));

	}
})

// increments
window.setInterval(function(){
	blobs(miniBlobWorkerAmount);
	
}, 1000);