$(function () {
  "use strict";

  // chart 1

  var ctx = document.getElementById("chart1").getContext("2d");

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke1.addColorStop(0, "#1e8bc1");
  gradientStroke1.addColorStop(1, "#1e8bc1");

  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
  gradientStroke2.addColorStop(0, "#075897");
  gradientStroke2.addColorStop(1, "#075897");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Laptops",
          data: [65, 59, 80, 81, 65, 59, 80, 81, 59, 80, 81, 65],
          borderColor: gradientStroke1,
          backgroundColor: gradientStroke1,
          hoverBackgroundColor: gradientStroke1,
          pointRadius: 0,
          fill: false,
          borderRadius: 20,
          borderWidth: 0,
        },
        {
          label: "Mobiles",
          data: [28, 48, 40, 19, 28, 48, 40, 19, 40, 19, 28, 48],
          borderColor: gradientStroke2,
          backgroundColor: gradientStroke2,
          hoverBackgroundColor: gradientStroke2,
          pointRadius: 0,
          fill: false,
          borderRadius: 20,
          borderWidth: 0,
        },
      ],
    },

    options: {
      maintainAspectRatio: false,
      barPercentage: 0.5,
      categoryPercentage: 0.8,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // worl map

  jQuery("#geographic-map-2").vectorMap({
    map: "world_mill_en",
    backgroundColor: "transparent",
    borderColor: "#818181",
    borderOpacity: 0.25,
    borderWidth: 1,
    zoomOnScroll: false,
    color: "#009efb",
    regionStyle: {
      initial: {
        fill: "#008cff",
      },
    },
    markerStyle: {
      initial: {
        r: 9,
        fill: "#fff",
        "fill-opacity": 1,
        stroke: "#000",
        "stroke-width": 5,
        "stroke-opacity": 0.4,
      },
    },
    enableZoom: true,
    hoverColor: "#009efb",
    markers: [
      {
        latLng: [31, 37],
        name:'Jordan'
      },
    ],
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#b6d6ff", "#005ace"],
    selectedColor: "#c9dfaf",
    selectedRegions: [],
    showTooltip: true,
  });
});

// chart 16
var ctx = document.getElementById("chart16").getContext("2d");

var gradientStroke5 = ctx.createLinearGradient(0, 0, 0, 300);
gradientStroke5.addColorStop(0, "#7f00ff");
gradientStroke5.addColorStop(1, "#e100ff");

var gradientStroke6 = ctx.createLinearGradient(0, 0, 0, 300);
gradientStroke6.addColorStop(0, "#fc4a1a");
gradientStroke6.addColorStop(1, "#f7b733");

var gradientStroke7 = ctx.createLinearGradient(0, 0, 0, 300);
gradientStroke7.addColorStop(0, "#283c86");
gradientStroke7.addColorStop(1, "#45a247");

var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Salesman Name", "Salesman Name", "Salesman Name"],
    datasets: [
      {
        backgroundColor: [gradientStroke5, gradientStroke6, gradientStroke7],

        hoverBackgroundColor: [
          gradientStroke5,
          gradientStroke6,
          gradientStroke7,
        ],

        data: [50, 50, 50],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  },
});

// chart14
var ctx = document.getElementById("chart14").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [12, 19, 3,5],
        backgroundColor: [
          "#0d6efd",
          "#6f42c1",
          "#d63384",
          "#f52154",
        ],
        borderWidth: 5,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  },
});

// chart15
var ctx = document.getElementById("chart15").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [12, 19, 3,5],
        backgroundColor: [
          "#0d6efd",
          "#6f42c1",
          "#d63384",
          "#f52154",
        ],
        borderWidth: 5,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  },
});
