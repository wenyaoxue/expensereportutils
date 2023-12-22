# V1
## earlier in the week
* convert.py
* ScrapeEmojis.java
## 11/19 (< 5 hrs coding)
* 00:30 - 02:40 product backlog for the next few versions came to me in visions as i was trying to fall asleep
* categorizing.html add purchase, delete, ... moved to a json file..., realized: i originally wanted v2 to be serverless, all client-side - so that people could use without downloading/using the command line, as accessible as possible, but client side can't read/write from files, and that is imperative. i guess i'll be using react/nodejs
* finished around 16:15
# V2
## 11/19
* downloaded nodejs, created the app, trying to remember nodejs and react
## 11/20
* routes - mission and home (noted that read/write from public folder)
* summary-transaction dropdown
* type dropdown: type for summary, date range for transaction (predefined + custom (with its own input fields), `assumes 2023`)
* transactions: date filter using selected date range, table display (expensereport json using [website](https://www.convertcsv.com/csv-to-json.htm), categories json, category calculated), sorts (chronological, $ amount, categorical, note) with the first of the column highlighted (`rather have alternating colors!`)
## 11/21 (<2.5 hrs)
* transactions: unified (eg can have multiple filters, one sort, at once) check for sorts (above, just refactored) and filters (date range (refactored from previous general dropdowns), $ min, $ max, Category, Unknown, Details on - all of which allow for no filter) - including highlight and table header refactor
## 11/22 (~40 min)
* updated the transactions json + the js to display: includes all 2023 data thus recorded, fields: +edited, -received, -paid, +type +amount
* added a message when no data exists
* alphabetized the category filter drop down
* started working on alternating colors - refactoring the table display
## idk if i did anything else during this time??
## 12/21 (x (+y = ~118min))
* did a little more googling and accepted the fact that i'm gonna have to create a backend to update files
* finished some documentation, created preliminary instructions and uploaded the relevant files
# V3
## 12/21 (y (+x = ~118min))
* getting back in the swing of creating a java rest app - reviewing old project, notes
* created a demo, barest minimum spring web app: one path that returns a string, checked the url and all good
* starting to change the front end: directed fetch to the new backend, made sure i can get the string, also added a "last sync" timestamp
* 7 min today's journal
* 41 min fiddling around, reacquainting myself with java, maven, json - changed my one path to return the json file (as a json string), updated the front end - restored to the same front end as v2
