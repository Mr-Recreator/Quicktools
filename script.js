function calculate() {
    let ticket_price = parseFloat(document.getElementById("ticket_price").value);
    if (isNaN(ticket_price) || ticket_price <= 0) {
        document.getElementById("result").innerText = "Please enter a valid ticket price.";
        return;
    }
    
    let convenience_fee = 30;
    let gst_convenience = convenience_fee * 0.18;
    let ewallet_charge = 10;
    let gst_ewallet = ewallet_charge * 0.18;
    let total_amount = ticket_price + convenience_fee + gst_convenience + ewallet_charge + gst_ewallet;
    let recommended_load = Math.ceil(total_amount);
    
    document.getElementById("result").innerText = 
        `Exact Amount Needed: ₹${total_amount.toFixed(2)}\nRecommended Load: ₹${recommended_load}`;
}