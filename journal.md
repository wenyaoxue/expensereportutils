# V1
## earlier in the week
* convert.py
* ScrapeEmojis.java
## 11/18
* came to me in a vision as i was trying to fall asleep
## 11/19 (~1 hr)
finished
# V2
## 11/19 (<4 hrs)
* i originally wanted v2 to be serverless, all client-side - so that people could use without downloading/using the command line, as accessible as possible, but client side can't read/write from files, and that is imperative. i guess i'll be using react/nodejs
## 11/20
* routes - mission and home (noted that read/write from public folder)
* summary-transaction dropdown
* type dropdown: type for summary, date range for transaction (predefined + custom (with its own input fields), `assumes 2023`)
* transactions: date filter using selected date range, table display (expensereport json using [website](https://www.convertcsv.com/csv-to-json.htm), categories json, category calculated), sorts (chronological, $ amount, categorical, note) with the first of the column highlighted (`rather have alternating colors!`)
## 11/21 (<2.5 hrs)
* transactions: unified (eg can have multiple filters, one sort, at once) check for sorts (above, just refactored) and filters (date range (refactored from previous general dropdowns), $ min, $ max, Category, Unknown, Details on - all of which allow for no filter) - including highlight and table header refactor
