
var chartColors = ["#2196f3", "#f44336", "#4CAF50", "#9C27B0", "#FF5722", "#009688"];
 function drawChart(categoryTotals) {
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var legend = document.getElementById("chartLegend");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    legend.innerHTML = "";

    var labels = Object.keys(categoryTotals);
    var total = 0;
    for (var i = 0; i < labels.length; i++) {
        total = total + categoryTotals[labels[i]];
    }


    if (total === 0) {
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, 2 * Math.PI);
        ctx.fillStyle = "#e0e0e0";
        ctx.fill();
        legend.innerHTML = "<li>No expenses to show</li>";
        return;
    }

    var startAngle = 0;

    for (var i = 0; i < labels.length; i++) {
        var value = categoryTotals[labels[i]];
        var sliceAngle = (value / total) * 2 * Math.PI;
        var color = chartColors[i % chartColors.length];

        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.arc(125, 125, 100, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();

        startAngle = startAngle + sliceAngle;
       
        var li = document.createElement("li");
        li.innerHTML = "<span class='color-box' style='background:" + color + "'></span>" + labels[i] + " - ₹" + value;
        legend.appendChild(li);
    }
 }

