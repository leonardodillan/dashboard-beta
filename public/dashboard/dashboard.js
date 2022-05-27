/** @format */


// ==================================== GRAFICO 1 =========================================//

const labels = ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(2, 151, 79)",
      borderColor: "rgb(2, 151, 79)",
      data: [19, 20 , 25, 28, 26, 24, 22],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};


// ==================================== GRAFICO 2 =========================================//

const labelsG2 = ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const dataG2 = {
  labels: labelsG2,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "rgb(163, 204, 64)",
      borderColor:  "rgb(163, 204, 64)",
      data: [60, 75, 68, 78, 79, 80, 81],
    },
  ],
};

const configG2 = {
  type: "line",
  data: dataG2,
  options: {},
};


// ==================================== GRAFICO 3 =========================================// 

const labelsG3 = ["January", "February", "March", "April", "May", "June"];

const dataG3 = {
  labels: labelsG3,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(2, 151, 79)",
      borderColor: "rgb(2, 151, 79)",
      data: [27, 28, 26, 24, 22, 20],
    },
    {
      label: "Umidade",
      backgroundColor: "rgb(163, 204, 64)",
      borderColor: "rgb(163, 204, 64)",
      data: [75, 70, 65, 80, 88, 69, 65],
    },
  ],
};

const configG3 = {
  type: "bar",
  data: dataG3,
  options: {},
};

// ==================================== GRAFICO 4 =========================================//

const labelsG4 = ["07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const dataG4 = {
  labels: labelsG4,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "rgb(2, 151, 79)",
      borderColor:  "rgb(2, 151, 79)",
      data: [60, 75, 68, 78, 79, 80, 81],
    },
  ],
};

const configG4 = {
  type: "line",
  data: dataG4,
  options: {},
};

// ==================================== GRAFICO 5 =========================================//

const labelsG5 = ["07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const dataG5 = {
  labels: labelsG5,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "rgb(163, 204, 64)",
      borderColor:  "rgb(163, 204, 64)",
      data: [60, 75, 68, 78, 79, 80, 81],
    },
  ],
};

const configG5 = {
  type: "line",
  data: dataG5,
  options: {},
};

// ==================================== GRAFICO 6 =========================================// 

const labelsG6 = ["January", "February", "March", "April", "May", "June"];

const dataG6 = {
  labels: labelsG6,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(2, 151, 79)",
      borderColor: "rgb(2, 151, 79)",
      data: [27, 28, 26, 24, 22, 20],
    },
    {
      label: "Umidade",
      backgroundColor: "rgb(163, 204, 64)",
      borderColor: "rgb(163, 204, 64)",
      data: [75, 70, 65, 80, 88, 69, 65],
    },
  ],
};

const configG6 = {
  type: "bar",
  data: dataG6,
  options: {},
};

// ==================================== GRAFICO 7 =========================================//

const labelsG7 = ["07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const dataG7 = {
  labels: labelsG7,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "rgb(2, 151, 79)",
      borderColor:  "rgb(2, 151, 79)",
      data: [60, 75, 68, 78, 79, 80, 81],
    },
  ],
};

const configG7 = {
  type: "line",
  data: dataG7,
  options: {},
};

// ==================================== GRAFICO 8 =========================================//

const labelsG8 = ["07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const dataG8 = {
  labels: labelsG8,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "rgb(163, 204, 64)",
      borderColor:  "rgb(163, 204, 64)",
      data: [60, 75, 68, 78, 79, 80, 81],
    },
  ],
};

const configG8 = {
  type: "line",
  data: dataG8,
  options: {},
};


// ==================================== GRAFICO 9 =========================================//

const labelsG9 = ["07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];

const dataG9 = {
  labels: labelsG9,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "rgb(2, 151, 79)",
      borderColor:  "rgb(2, 151, 79)",
      data: [60, 75, 68, 78, 79, 80, 81],
    },
  ],
};

const configG9 = {
  type: "line",
  data: dataG9,
  options: {},
};

const grafico1 = new Chart(document.getElementById("grafico1"), config);
const grafico2 = new Chart(document.getElementById("grafico2"), configG2);
const grafico3 = new Chart(document.getElementById("grafico3"), configG3);

const grafico4 = new Chart(document.getElementById("grafico4"), configG4);
const grafico5 = new Chart(document.getElementById("grafico5"), configG5);
const grafico6 = new Chart(document.getElementById("grafico6"), configG6);

const grafico7 = new Chart(document.getElementById("grafico7"), configG7);
const grafico8 = new Chart(document.getElementById("grafico8"), configG8);
const grafico9 = new Chart(document.getElementById("grafico9"), configG9);

