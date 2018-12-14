function getCount()
{
    var currency = [2000,500,200,100,50,20,10,5,2,1];
    var amount = document.getElementById("amt").value;
    let totalNotes =0;
    for( i=0;i<currency.length ; i++)
    {
        if(currency[i] <= amount)
        {
            let noOfNotes = parseInt(amount/currency[i]);
            amount = amount%currency[i]; //change   
            totalNotes +=noOfNotes;
            document.getElementById("Denomination"+currency[i]).innerText = noOfNotes + 
            " notes of Rs " + currency[i];

        //    if(amount == 0)
        //       {  break; } 
        } 
        else
        {
            document.getElementById("Denomination"+currency[i]).innerText = 
            "0 notes of Rs " + currency[i];
        }

    }

    document.getElementById("totalNotes").innerText='Total notes dispensed : '+totalNotes; 
}