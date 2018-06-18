totalBlobs = 0;

totalBlobsEl = document.getElementById('total-blobs');
function blobs(n) {
	totalBlobs += n;
	totalBlobsEl.innerHTML = totalBlobs;
}

powerUpCost 
powerUpCostEl = document.getElementById("powerUpCost");
powerUpLevelEl = document.getElementById("powerUpLevel");
powerUpBuyOneEl = document.getElementById("powerUpBuyOne");