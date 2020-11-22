const cbsUrl =
  "https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/provincesCBS.json";

let data = [];

export async function setupData() {
  data = await getData();
  const averagePercentage = Math.round(getAverage(data));
  data.push({
    location: "Nederland",
    percentage: averagePercentage,
  });
  return data;
}

async function getData() {
  const response = await fetch(cbsUrl);
  const json = await response.json();
  return await json;
}

function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i].percentage;
  }
  return sum / array.length;
}

// export async function getLocation() {
//   await setupData();
//   return data.filter((item) => item.location == "Groningen");
// }

// export async function getLocation() {
//   await setupData();
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].location === "Limburg") {
//       console.log("yeey");
//       return data[i];
//     }
//   }
// }
