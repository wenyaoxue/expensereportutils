# V1 Instructions
## Setup
* download and extract the `V1` folder
* make a copy of the Google Sheets template in your own account by clicking [this link](https://docs.google.com/spreadsheets/d/103QHBMYBoI8n6MZCgLJl2yzjwSCeDDdJxejeyd8QNSE/copy)
* click on the `categorizing.html` file
  * customize your categories
  * update spreadsheet task 1
    * click `Copy Formula`
    * Repeat the following for every month sheet (Jan, Feb, ... Dec) of the Google Sheets workbook
      * click cell E2, ctrl+v
      * ctrl+c, ctrl + shift + down arrow, ctrl+v
  * update spreadsheet task 2
    * click `Copy Categories`
    * click cell A6 on the summary sheet of the Google Sheets workbook, ctrl+v
    * (you can delete any extra rows, just note if you try to add more you'll have to recreate the formatting as well)
    * in cells P6 to P24, type the amount you wish to spend for the relevant category each month
## Transaction Logging (in the Google Sheets workbook)
### Manual (eg from receipts, from memory)
* For each transaction fill out cells A,B,C,D,F,G (as needed) in one row on the relevant month sheet
### Automated
Note this is currently a very specialized functionality
* Save a Chase statement csv, a Discover statement csv, and a Venmo statement csv to the V1 folder (must have all 3)
  * chase > click the bank account > account activity > search (date range), download account activity > csv, download
  * discover > Activity > Activity & Statements > Advanced Search (date range), search > Download > CSV > Download
* Optional: emojis.csv has a nonzero chance of becoming outdated if new emojis are created. To update, execute ScrapeEmojis.java, select the relevant output in the console, ctrl+c, go to emojis.csv, ctrl+a, ctrl+v
* Open convert.py in a text editor and make sure the values in lines 3-5 match the names of the 3 statements you've saved
* Execute convert.py (eg in terminal, cd to location, `python3 convert.py`)
* Select the output in the console, ctrl+c, click cell A1 on the relevant month sheet, ctrl+shift+v
* Re-paste cells in column E
* Review notes, rewrite if needed
* Review if you have any manual logs to avoid duplicates, and keep as much accurate information as you have (note some transaction dates recorded from the statements may be up to a few days off)
## Visualizing (in the Google Sheets workbook)
* After logging some transactions on a month, update cell J1 on the relevant month sheet to the number of days' worth of data has been logged for the month (eg used to calculate per day averages)
* Some features:
  * click the 3 lines by a column header (cells A1-H1) on a month sheet to sort or filter
    * for chronological sort: Time Sort A to Z, then Date Sort A to Z (note the first transaction logged of each day should be highlighted in a darker yellow)
  * each month sheet's aggregate calculations and pie chart in columns I and J
  * summary sheet aggregate calculations (can change view using the dropdown in cell A5) and multiple bar chart
    * each category row is darker on months where values are higher for that category
    * in cells B2-M2, type anything under the months for which the values should be counted toward the monthly averages
    * values in cells O6 to O24 are highlighted red if the monthly average is greater than the budget, green if less than 90% of the budget, yellow otherwise
