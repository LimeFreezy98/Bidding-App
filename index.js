// startup load bids

window.onload = function() {
    loadBids()

};

function placeBid(bidder) {
    const input = document.getElementById(`bidder${bidder}Input`);
    const raw = input.value.trim();
    const bidValue = parseInt(raw, 10);

    if (raw === "" || isNaN(bidValue) || bidValue <= 0) {
        alert("Please enter a valid positive bid.");
        return;
    }

    // save from localstorage
    localStorage.setItem(`bidder${bidder}`, bidValue.toString());

    // update ui
    document.getElementById(`bidder${bidder}Bid`).innerText = `$${bidValue}`;

    
}



function loadBids() {
    const bid1 = localStorage.getItem("bidder1");
    const bid2 = localStorage.getItem("bidder2");

    if (bid1) document.getElementById("bidder1Bid").innerText = `$${bid1}`;
    if (bid2) document.getElementById("bidder2Bid").innerText = `$${bid2}`;
}



function clearBids() {
    localStorage.clear();
    document.getElementById("bidder1Bid").innerText = "";
    document.getElementById("bidder2Bid").innerText = "";
}