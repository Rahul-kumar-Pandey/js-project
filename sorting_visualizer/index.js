
const selectElement = document.querySelector(".sort");

selectElement.addEventListener("change", (event) => {
 const targetFunc= `${event.target.value}`;
 if(targetFunc=="SelectionSort") SelectionSort();
 else if(targetFunc=="BubbleSort") BubbleSort();
});
const container = document.querySelector(".data-container");
let delay=20;

function handlerSpeed(value){
    delay=value;
    console.log(delay);
}
// function to generate bars
function generatebars(num = 20) {

    //for loop to generate 20 bars
    for (let i = 0; i < num; i += 1) {

        // To generate random values from 1 to 100
        const value = Math.floor(Math.random() * 100) + 1;

        // To create element "div"
        const bar = document.createElement("div");

        // To add class "bar" to "div"
        bar.classList.add("bar");

        // Provide height to the bar
        bar.style.height = `${value * 3}px`;

        // Translate the bar towards positive X axis 
        bar.style.transform = `translateX(${i * 30}px)`;

        // To create element "label"
        const barLabel = document.createElement("label");

        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");

        // Assign value to "label"
        barLabel.innerHTML = value;

        // Append "Label" to "div"
        bar.appendChild(barLabel);

        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}

//perform "Selection Sort"
async function SelectionSort() {
    let bars = document.querySelectorAll(".bar");
    // Assign 0 to min_idx
    let min_idx = 0;
    for (let i = 0; i < bars.length; i += 1) {

        // Assign i to min_idx
        min_idx = i;

        // Provide darkblue color to the ith bar
        bars[i].style.backgroundColor = "darkblue";
        for (let j = i + 1; j < bars.length; j += 1) {

            // Provide red color to the jth bar
            bars[j].style.backgroundColor = "red";

            // To pause the execution of code for delay milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            // To store the integer value of jth bar to var1 
            let val1 = parseInt(bars[j].childNodes[0].innerHTML);

            // To store the integer value of (min_idx)th bar to var2 
            let val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            // Compare val1 & val2
            if (val1 < val2) {
                if (min_idx !== i) {

                    // Provide skyblue color to the (min-idx)th bar
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {

                // Provide skyblue color to the jth bar
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar
        let temp1 = bars[min_idx].style.height;
        let temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        // To pause the execution of code for delay milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#4f2f73";

    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#4f2f73";
}
//perform "bubble sort"
async function BubbleSort() {
    let bars = document.querySelectorAll(".bar");
    let n=bars.length;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            bars[j].style.backgroundColor = "darkblue";
            bars[j+1].style.backgroundColor = "red";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            let val1 = parseInt(bars[j].childNodes[0].innerHTML);
            let val2 = parseInt(bars[j+1].childNodes[0].innerHTML);
            if (val1 > val2) {

                let temp1 = bars[j].style.height;
                let temp2 = bars[j].childNodes[0].innerText;
                bars[j].style.height = bars[j+1].style.height;
                bars[j+1].style.height = temp1;
                bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
                bars[j+1].childNodes[0].innerText = temp2;
        
                swapped = true;
            }

            // To pause the execution of code for delay milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
              // Provide skyblue color to the (min-idx)th bar
              bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
        
              // Provide lightgreen color to the ith bar
              bars[j+1].style.backgroundColor = " rgb(49, 226, 13)";
            
        }
        if (!swapped)
            break;
    }
    for (let i = 0; i < n ; i++) {
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

     // To enable the button "Generate New Array" after final(sorted)
     document.getElementById("Button1").disabled = false;
     document.getElementById("Button1").style.backgroundColor = "#4f2f73";
 
     // To enable the button "Selection Sort" after final(sorted)
     document.getElementById("Button2").disabled = false;
     document.getElementById("Button2").style.backgroundColor = "#4f2f73";
    
}
// Call "generatebars" function
generatebars();

// function to generate new random array 
function generate() {
    window.location.reload();
}

//  function to disable the button
function disable() {
    // To disable the button "Generate New Array"
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

    // To disable the button "Selection Sort"
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}