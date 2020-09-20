const alertBanner = document.getElementById("alert");
const dot = document.querySelector(".dot");
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener("click", function(event){
    const element = event.target;
    if (element.className === "alert-banner-close") {
    alertBanner.style.display = "none";
    dot.style.display = "none";
    }
});

const trafficUl = document.querySelector(".traffic-nav");
const trafficNav = document.querySelectorAll(".traffic-nav li");
const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
    labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm",
    "5pm", "6pm", "7pm", "8pm"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficData2 = {
    labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue",
    "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
    data: [1000, 1000, 1000, 2000, 3000, 1750, 2500, 1800, 2000, 1000,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficData3 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [2000, 3000, 2500, 2000, 3000, 1800, 1500, 2000, 2500, 1000,
    3000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficData4 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
    data: [500, 1000, 1500, 2000, 2500, 3000, 2000, 3000, 2500, 2800,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};



let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
};

trafficNav[0].style.backgroundColor = "#4BE54A";
trafficNav[0].style.color = "white";
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


trafficUl.addEventListener("click", function(event){

    for(let i = 0; i < trafficNav.length; i++){
        trafficNav[i].style.backgroundColor = "";
        trafficNav[i].style.color = "#666666";
    }

    if(event.target.textContent === "Hourly"){
        event.target.style.backgroundColor = "#4BE54A";
        event.target.style.color = "white";
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
        
    }

    else if(event.target.textContent === "Daily") {
        event.target.style.backgroundColor = "#4BE54A";
        event.target.style.color = "white";
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData2,
            options: trafficOptions
        });
    }

    else if(event.target.textContent === "Weekly") {
        event.target.style.backgroundColor = "#4BE54A";
        event.target.style.color = "white";
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData3,
            options: trafficOptions
        });
    }

    else if(event.target.textContent === "Monthly") {
        event.target.style.backgroundColor = "#4BE54A";
        event.target.style.color = "white";
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData4,
            options: trafficOptions
        });
    }
    
});



const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
 };

const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
}
    
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});
    
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
};

const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
}
    
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", function(){
    
    if(user.value === "" && message.value === ""){
        alert("Kindly fill in user & message fields before clicking on submit");
    }
    else if(user.value === "") {
        alert("Kindly fill in user field before clicking on submit");
    }
    else if(message.value === "") {
        alert("Kindly fill in message field before clicking on submit");
    }
    else {
        alert("Your message has been successfully sent!");
    }

});