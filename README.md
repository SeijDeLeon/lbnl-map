# LBNL Calculation Record Search Tool
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/72ff4b67-8eac-44a7-8f1c-8d60ea20bcc4)
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/c8350271-6a91-4ed0-ae06-8b70100db549)

This project was created using React, Leaflet, and Tailwind. It can display over three thousand records by various search parameters, including the ability to select records via geographic region on an interactive map. It allows end users to quickly find and open relevant records with a web based interface instead of manually searching through excel files that contain lists of record names.

## Motivation

Lawrence Berkeley National Laboratory is a federally funded DOE lab campus celebrating its 90th year. There are decades worth of documents stored and managed internally. Engineers regularly need to find and view these records, in particular those related to construction documentation. Part of that documentation includes structural calculation records. For example, each building contains a set of calculation records proving the design satisfies the building code. Besides buildings, smaller individual equipment and other construction related work will also have associated calculations.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/0a2da4d5-0ce0-41c0-8b99-f69a7d3ab0c4)

Finding and opening these records can be a tedious process. First open a master spreadsheet, then find the ID number for the record, then open the file with that ID number in a Google Drive folder.

The motivation for streamlining this process is allowing end users to find specific records in a matter of seconds, and also to quickly find previous records that can be used as a reference for future designs. This reduces wasted time searching through documents, and can help new engineers find references for their future designs.

## Functionality

End users can filter records by clicking elements on the map tool or entering a building number:
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/b411fc71-af6f-4beb-b7a1-289575b3c2b9)


Records can be sorted by building floor level, type, and attachment type.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/acb017a1-5233-4ecb-8867-c4023bf181f7)

Depending on the chosen parameters, the relevant records are shown with an image preview.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/44f365d5-0c5c-4c5f-a9d5-4cd44f206701)

Clicking a record opens up the file in a new tab, allowing the user to view or download.

## Notes on Development Process

### Map Tool Setup

Google Earth was used to create layer data that could eventually be imported as clickable elements on the map tool. Shapes were drawn around buildings, named accordingly, downloaded as KML layers, and finally converted to GeoJSON format.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/bf390fc3-f933-456a-9c74-16e60ba0db7f)

Leaflet was selected as the map tool due to support from React-Leaflet and its ability to display map tiles at small scale. The previously created GeoJSON elements are passed into the map with a click handler for the required functionality.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/3965d80c-8a67-4ded-a9f2-ab3c536987ad)


### Google Scripts and Google Sheets

The master Excel spreadsheet was downloaded and converted to Google Sheets, which has Google Script functionality. A Google Script was used to target and retrieve record data from the folder locations in Google Drive. This allowed the retrieval of the links for each record so they could be opened from the web app. At this stage the records were cleaned for duplicates, missing entries, and revisions.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/e763acc8-0e4c-4e67-95ce-635db9cd068f)

To add search functionality, parameters were added to each record row in Google Sheets. Based on the record contents, parameters were manually toggled on as applicable.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/4b55725b-920e-44ee-b884-edc07a5377dd)

The final cleaned and tagged data was then converted to a JSON format which was copied into a Javascript file.

### Lazy Loading

To prevent loading all records (and record images) at once, only a subset of records are displayed in the results. Images are only loaded for the current display results. This is done by dynamically specifying the image paths based on the ID number. This only works when the reference to the exact path is known to Webpack during the build process, which is done via context.
![image](https://github.com/SeijDeLeon/lbnl-map/assets/55897006/40116e64-7f23-4974-bafb-98df0e46a1d5)


