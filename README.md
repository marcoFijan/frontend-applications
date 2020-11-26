# Functional programming & Frontend data

Student name: Marco Fijan

[![afbeelding.png](https://i.postimg.cc/Xv8q0qbH/afbeelding.png)](https://postimg.cc/wt1gX63L)

## The Assignment

The Volkskrant asked me to give interesting insights about 'the car in the city' for a potential interesting article. It's my job to research the RDW datasets for interesting insights. The Volkskrant will write an article about it if I find something interesting. As a tip, the Volkskrant gave me the link to the RDW datasets, but I am free to chose and use other datasets as well.

## Contents

This project contains a web-app where I show an interesting insight about the availible parkingspots for people with a phisical limitation. You can look up your own province to see if your province has enough parkingspots, you can see what the percentages are of people with a phisical limitation per province and you can find a stackedbarchart which shows percentages and amounts of availible and not availible parkingspots for people who phisicly disabled.

## Concept

I want to visualize the accessibility with percentages of availible parking spaces. I want to use a parkingarea and color these according to their accessibility:
[![Artboard-1-copy-5-100.jpg](https://i.postimg.cc/PrXQF6j2/Artboard-1-copy-5-100.jpg)](https://postimg.cc/xqZmX3qz)

The green parking spots are parking areas in percentage that are accessible for phisical handicapped people. The red parking areas is the amount of percentage of parking areas not accessible for phisical handicapped people.
The user can sort the data by location on the right side of the screen.
Below the visualisation the user can dive deeper into the data.

### Research Questions

According to [this dataset from the Central Bureau of Statistics of the Netherlands](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83674NED/table?ts=1603802261246), a lot of citizenry have one or more phisical limitation. More then 15% has a phisical limitation. Still, according to the RDWDataset, most parkinggarages are not accessible for those citizenry. I want to research how many parkingspots are availible per province, and how many are required in percentage according to the numbers of the Central Bureau of Statistics.

#### Main Research Question:

Which province in the Netherlands is the best province to live for people with a phisical limitation when you look at the accessibility of parkingspots?

#### Supporting sub-Questions

- What is the ratio of the overall capacity and availible parking spaces for people with a disability per province?
- What is the ratio of the total number of parking garages and accessible parking garages for people with a disability per province?
- What is the percentage of people with a physical disability per province?

## Used data

This is the data I used per project:

Before I can visualize my concept, I needed to collect the data that I need:

I wanted to collect my data from [different RDWDatasets](https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1). Unfortunatly, many datasets were incomplete or couldn't be linked together. So I chose for the [big RDWDataset](https://npropendata.rdw.nl/parkingdata/v2/) where all data could be fetched.

From the dataset I need the following data:

- **DisabledAccess**: _boolean_ which shows if parking garage is accessible for people with a phisical handicap
- **Capacity**: _integer_ that gives the amount of parkingspots of that garage
- **Province**: _string_ that gives the province where the parking garage is located

To read how I received and saved the data, please navigate to [receiving the data wiki](https://github.com/marcoFijan/frontend-data/wiki/Ophalen-van-Data) where I go into detail on how I collected and saved that data.

## Features

### Frontend Data

As of now, this project has the following features:

- A Svelte application, with as subject the accessibility of parkingspots in parkingGarages for phisical limitated people
- Look up your own province to see how your province scores compared to other provinces
- Compare the amount of phisical limitated people per province
- The used data from RDW will be cleaned (all undefined values will be edited in to usable data)
- The new data will be saved in an array and given to a Chart
- The chart will be visualized with the power of d3 and Svelte
- The chart will show a stacked barchart
- The barchart will show the amount of accessible parkingspots for people with a phisical handicap
- The barchart will also show the amount of inaccessible parkingspots for people with a phisical handicap
- The barchart will show percentages of accessible parkingspots for people with a phisical handicap

## Getting started guide

### OPTION 1: Cloning git

To try this project for yourself, you can clone the github repo to your locale machine. Just follow these steps

#### STEP 1: Create your local git repository

Navigate with your terminal to the desired folder where you want to clone this repo

```
cd "c:/foldername1/foldername2/destination"
```

**Optional** Use this command to create a new folder where you want to clone this repo.

```
mkdir "foldername"
```

**Optional** Don't forget to navigate to that folder with using the cd command

**Optional** If you desire to make changes to this project run this command to make that possible

```
git init
```

#### STEP 2: git clone

To clone this project and receive it on your locale machine, use this command

```
git clone https://github.com/marcoFijan/frontend-applications.git
```

After this command your computer will download the files automaticly

#### STEP 3: Launching

Navigate to the folder where you cloned the git repository and launch the index.html

#### STEP 4: Open console

To see your results, you need to look in the console
Right-click on the webpage and click 'inspect' or 'inspect element'
Then, click on the tab called 'console'

That's it. You are all set up!

### OPTION 1: Download manually

#### STEP 1: Download the files

Navigate to the code on Github and press the 'code' button. After pressing the 'code' button select 'download as zip'
[![afbeelding.png](https://i.postimg.cc/4xkw1zt8/afbeelding.png)](https://postimg.cc/9rbGmwLT)

#### STEP 2: Unzipping

After downloading the files navigate to a folder of your choice and copy the files from the zip folder to that folder.

#### STEP 3: Launching

Navigate to that folder where you put the files and launch the index.html

#### STEP 4: Open console

To see your results, you need to look in the console
Right-click on the webpage and click 'inspect' or 'inspect element'
Then, click on the tab called 'console'

That's it. You are all set up!

## Credits

### Collecting Data

- Rijk van Zanten for explaining how to connect multiple datasets with eachother
- Laurens Aarnoudse for explaining how to avoid the CORS error

### D3 & Svelte

- [The Muratorium](https://www.youtube.com/watch?v=bXN9anQN_kQ&t) for explaining stack in d3
- [Curan](https://www.youtube.com/watch?v=_8V5o2UHG0E&t=17327s&ab_channel=freeCodeCamp.org) for the amazing explanation of D3
- [Gijs Laarman](https://github.com/gijslaarman/d3-svelte) for the example of d3 combined with Svelte
- [Svelte tutorials](https://svelte.dev/tutorial/basics) for the clear explanation of Svelte
- [Svelte Examples](https://svelte.dev/examples#hello-world) for a clear explanation on how to handle multiple issues

### Other

- Laurens Aarnoudse for the live code demo's and explaining functional programming
- RDW for collecting and documenting the dataset
- The Volkskrant for giving tips and feedback

## License & Resources

### Datasets

- [RDWD Opendata: Specificaties](https://opendata.rdw.nl/resource/b3us-f26s.json)
- [NPRO Opendata: ParkingFacilities](https://npropendata.rdw.nl/parkingdata/v2/)
- [CBS Statline: Gezondheidsmonitor](https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83674NED/table?ts=1603802261246)
