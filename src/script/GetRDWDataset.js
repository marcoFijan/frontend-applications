const url =
  "https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/RDWDataset.json";
const provinces = [
  "groningen",
  "friesland",
  "overijssel",
  "drenthe",
  "gelderland",
  "limburg",
  "noord-brabant",
  "zuid-holland",
  "noord-holland",
  "zeeland",
  "utrecht",
  "flevoland",
  "onbekend",
];

let data = [];

export async function setupRDWData() {
  data = await getData();
  const parkingOverviewFiltered = changeUnknown(data);
  const capacityPerLocationCollection = provinces.map((province) => {
    const capacityPerLocation = getCapacityPerLocation(
      parkingOverviewFiltered,
      province
    );
    const sumOfGarages = getSumOfGarages(capacityPerLocation);
    const sumOfDisabledGarages = getSumOfDisabledGarages(capacityPerLocation);
    const sumOfCapacity = getSumOfCapacity(capacityPerLocation);
    const sumOfDisabledCapacity = getSumOfDisabledCapacity(capacityPerLocation);
    const percentageDisabledCapacity = getPercentage(
      sumOfCapacity,
      sumOfDisabledCapacity
    );
    return {
      province: province,
      totalAmountGarages: sumOfGarages,
      totalAMountDisabledGarages: sumOfDisabledGarages,
      totalCapacity: sumOfCapacity,
      totalDisabledCapacity: sumOfDisabledCapacity,
      totalNotDisabledCapacity: sumOfCapacity - sumOfDisabledCapacity,
      percentageAvailible: percentageDisabledCapacity,
      percentageNotAvailible: 100 - percentageDisabledCapacity,
    };
  });
  return capacityPerLocationCollection;
}

async function getData() {
  const response = await fetch(url);
  const json = await response.json();
  return await json.RDWData;
}

// import { RDWData } from "/src/script/RDWDataset.json";

// const parkingSpecsURL =
//   "https://raw.githubusercontent.com/marcoFijan/hostRDWData/main/RDWDataset.json";
// // const parkingSpecsURL = "https://api.jsonbin.io/b/5fbb8c1a04be4f05c9292c8e";
// const proxyURL = "https://cors-anywhere.herokuapp.com/";
// const provinces = [
//   "groningen",
//   "friesland",
//   "overijssel",
//   "drenthe",
//   "gelderland",
//   "limburg",
//   "noord-brabant",
//   "zuid-holland",
//   "noord-holland",
//   "zeeland",
//   "utrecht",
//   "flevoland",
//   "onbekend",
// ];

// export function setupRDWData(parkingSpecsURL) {
//   return getData(parkingSpecsURL);
// }

// async function getData(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return await json;
// }

function changeUnknown(parkingGarages) {
  const averageCapacity = Math.round(getAverageCapacity(parkingGarages));
  console.log(averageCapacity);
  return parkingGarages.map((garage) => {
    if (!garage.location || garage.location === "") {
      garage.location = "ONBEKEND";
    }

    if (!garage.capacity) {
      garage.capacity = averageCapacity;
    }
    return garage;
  });
}

function getAverageCapacity(parkingGarages) {
  const sumOfCapacity = getSumOfCapacity(parkingGarages);
  return sumOfCapacity / parkingGarages.length;
}

function getCapacityPerLocation(usefullDataArray, location) {
  return usefullDataArray.filter(
    (garage) => garage.location.toLowerCase() === location
  );
}

function getSumOfGarages(capacityPerLocation) {
  return capacityPerLocation.length;
}

function getSumOfDisabledGarages(capacityPerLocation) {
  return capacityPerLocation.reduce((sum, garage) => {
    if (garage.disabledAccess) {
      return sum + 1;
    }
    return sum;
  }, 0);
}

function getSumOfCapacity(capacityPerLocation) {
  return capacityPerLocation.reduce((sum, garage) => sum + garage.capacity, 0); //Help from Fun Fun Functions: https://www.youtube.com/watch?v=Wl98eZpkp-c
}

function getSumOfDisabledCapacity(capacityPerLocation) {
  return capacityPerLocation.reduce((sum, garage) => {
    if (garage.disabledAccess) {
      return sum + garage.capacity;
    }
    return sum;
  }, 0); //Help from Fun Fun Functions: https://www.youtube.com/watch?v=Wl98eZpkp-c
}

function getPercentage(totalCapacity, disabledCapacity) {
  return disabledCapacity / (totalCapacity / 100);
}

// setupRDWData(RDWData);
