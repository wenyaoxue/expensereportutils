# expensereportutils
* Processing and combining of statements downloaded from Chase, Discover, and Venmo to match Google Sheets Template
* Google Sheets template link + resources: coming soon

## V1 Instructions
### Setup
Setup can be done in order at the beginning, but if you ever need to update, simply redo all parts of the step marked `*`
* download and extract the `V1` folder
* make a copy of the Google Sheets template by clicking [this link](https://docs.google.com/spreadsheets/d/103QHBMYBoI8n6MZCgLJl2yzjwSCeDDdJxejeyd8QNSE/copy)
* `*` click on the `categorizing.html` file
  * customize your categories
  * update spreadsheet task 1
    * click `Copy Formula`
    * Repeat the following for every month sheet (Jan, Feb, ... Dec) of the Google Sheets workbook
      * click cell E2, ctrl+v
      * ctrl+c, ctrl + shift + down arrow, ctrl+v
  * update spreadsheet task 2
    * click `Copy Categories`
    * click cell A6 on the summary sheet, ctrl+v
    * (you can delete any extra rows)
    * in cells O6 to O24, type the amount you wish to spend for the relevant category each month (****************** rn only makes will make sense for the spent view.. ahh i will fix this for this version)
    * 
* ScrapeEmojis -> emojis.csv
* ??? -> Google Sheets Workbook
* convert -> Google Sheets month sheets
  * copy paste category formula
  * clean notes where needed
