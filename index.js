// startup load bids

window.onload = function() {
    loadBids()
    updateHighest()

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

    // update Highest bid
      updateHighest();
      
    //  clear input
    input.value = "";

}

function updateHighest() {
    const bid1 = parseInt(localStorage.getItem("bidder1"), 10) || 0;
    const bid2 = parseInt(localStorage.getItem("bidder2"), 10) || 0;
  
    let highest = "None";
    if (bid1 === 0 && bid2 === 0) {
      highest = "None";
    } else if (bid1 > bid2) {
      highest = `bidder1 - $${bid1}`;
    } else if (bid2 > bid1) {
      highest = `bidder2 - $${bid2}`;
    } else {
      // tie
      highest = `Tie at $${bid1}`;
    }
  document.getElementById("highestBidder").innerText = `Highest Bidder: ${highest}`;
}

function loadBids() {
    const bid1 = localStorage.getItem("bidder1");
    const bid2 = localStorage.getItem("bidder2");

    if (bid1) document.getElementById("bidder1Bid").innerText = `$${bid1}`;
    if (bid2) document.getElementById("bidder2Bid").innerText = `$${bid2}`;

    updateHighest();
}



function clearBids() {
    // erase localstorage data
    localStorage.clear();
    document.getElementById("bidder1Bid").innerText = "";
    document.getElementById("bidder2Bid").innerText = "";

    document.getElementById("bidder1Bid").innerText = "";
    document.getElementById("bidder2Bid").innerText = "";
    document.getElementById("highestBidder").innerText = "Highest Bidder: none";
}

