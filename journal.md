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
## 11/23
* finished alternating colors
* synced color selection with table colors
* text color changed (black and white, against background color) - later: may try to streamline the way these variables are passed through props
* how to write files!!!! fs doesn't work in components, frame in component that pulls an html from public that posts to php or js is in public, doesn't work, i think u need another server
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
## 12/22 and 12/23 (a long time - i am not a words person)
* finished a full draft of both mission statements
## 12/23 (55min) 
* starting mapping out the be paths needed
* updated getexprep be path: catch filenotfound, return []
* added getcats be path: incl fe fetch, generate default if not found
* added front end config/BaseURL and APIReqs - that's what we used with the fs project to do get, post, put, delete (i had been using fetch for above 2) + `npm i axios` + `npm audit fix --force` -> a bunch of errors :(, trying to restore to before axios before i stop tonight .... uh oh not npm starting at all now, yikes
* started postcolor, couldn't finish bc above
## 12/24 (183min)
* trying to reset, just with a new react app, gonna copy stuff over - all good
* finished postcolor be path: variables needed sending properly, colors json created (if not found) and updated, incl fe postColor for both selections - started with rgb then changed to hex for storage (note: # in a path causes some problems)
* added getcolors be path: incl fe apireqs get then catch updates default when page loads
* finished (i think) refactoring v1 categories.html into a component - incl link, delete, add, just cleaned a bit and not integrated with any other features yet
  * note in react, onclick for functions, onClick within html component being returned
  * note using useeffect to fire when an array or object changes: must use a deep copy, checks reference
## 12/25 (120ish min)
* continued refactoring categories.html
  * made sure cats variable was being reset
  * cleaned some
  * thought about features to implement
  * switched to reading initial dictionary from the file
  * save to file by posting - ie and loads from here too! bc above
    * @RequestBody String - encoding difficulty, plus looks like there might be a character limit
    * tried and figured out Map<String, List<String>> should get the object just file
  * changed reset buttons to last saved and also provided defaults, without posting
  * not yet, much later: (different category sets, ordered categories, ordered category sets - all for later, not now - file change and stuff)
* some decision paralysis
* moving json up to display to pass down to both summary and transactions - broken
* 65 + 120
* instead of trying to keep the whole table in a prop - not working and also eh why
* search file - post be, created be entity, considering how to store
* fe will keep a variable for current search name, + fetch
* lastUsed:''
* note reqbody entity will use the easiest constructor, even if sending no info at all
* for now --- i guess every time u change something, LASTUSED on the file will update. idk, prob not a good idea in general but whatevs for now
* post search done
* get search/name done - haven't applied yet
* get exprep/searchname
* still working - refactoring the filters, using search entity and JSONObject transaction
## 12/26 (40ish min)
* working on sorts
* added category gets: based on search
* having a controller constructor doesn't seem to be a good idea, having multiple controllers seems fine, gonna split
## 12/27 11:00
* finished identifycat/trsxn
* working on moving trdata from variable to api call
## 12/28 18:00
* debugging - alright so right now, in a parent component there's a local state variable that the parent can set to be one component or another. the parent component passes another local state variable and its set method to the child component (that is being set), but when the child component uses that set function, the child component isn't being re-rendered, so it doesn't trigger the setVal function ... however, because of that, that's why currently the child component can maintain its own values, otherwise ie `{childcomponent}` directly appears in the return html, it's resetting everything every time....oy
## 1/13 2hr?
* just tryna remember
* reworking display component - starting by creating search as a direct child component, and making sure the values are maintained by the display component
* small feature: switching to custom doesn't automatically reset the most recently selected date values
* working on backend path post LASTUSED - before it wasn't replacing, remembering how to handle JSON
* without dealing with any transaction data yet - entering search working (posting lastused), save search working, get search values working (added: updates the values in the form, doesn't affect the date range pick expected behavior)
  * note: can query select stuff from child components
* thinking about how to format all this search stuff together
* also definitely in the future each one of these can have multiselect/ordering.....  way in the future tho
## 1/15 45min
* moved all search stuff - checking vals, gets/posts, into the search component
* changed get search into a dropdown (including a get searches to populate the dropdown)
* syncing - saving updates dropdown, idk playing around with it to make sure things are right, :/ so many things going on, axioserrors that i haven't specifically debugged...
## 1/16 3h15min
* display parent component holds a variable for search name, and edits (child component's) get search drop down current value when set
* i'm getting an axios error on getsearches occasionally, i think it's because when you get, things are updated, so it tries to post a last used, so then it tries to get again before the post is done? that's my guess. let me look at my code. GET colors, POST search, GET searches - at beginning, sometimes error
* search overview:
  * NEW: constant search object defaultsearch with default vals
  * one state for each part of search (NEW: gets default values from defaultsearch)
  * function setSearchname - updates searchname state, updates apply search dropdown value
  * function savesearch: (NEW: (if current states != defaultsearch, ie if the page didn't just load - this appears to have fixed the previous error, no post search + get searches combo UNLESS you save the code and it autorefreshes, then it's not equal to defaultsearch and sometimes will get the error, seems logical) POST current search) then (if not lastused - setApplySearch and clear savesearch input field)
  * function getsearch: GET apply search dropdown value, set all search states and form values, setSearchname
  * every time any search part is updated: call savesearch("LASTUSED")
  * at the beginning, setDateSelect (hardcoded arrays) and setCatSelect (GET cats) and setApplySearch (GET searches then update apply search dropdown and if called with a searchname (ie just posted) update apply search dropdown value + NEW: else (ie page just loaded OR just deleted) getsearch
  * function selectDate - sets daterangepickvar, startdate, and enddate
  * return
    * apply search dropdown - calls getsearch
    * sort buttons - updates state + NEW: calls setSearchname
    * date dropdown - calls selectDate - and daterangepickvar (which includes fields that updates state and calls setSearchname)
    * amtmin, amtmax, cat, unk, dtls form fields - updates state and calls setSearchname
    * savesearch form field - calls savesearch and calls setSearchname
* added a function, go between for setting sortcol: also adds a class to highlight the selected button
* adding a delete this search: button (enabled when setApplySearch is done), function (DELETE then setApplySearch), backend (deleting LASTUSED reverts to og)
* forgot before - custom dates form fields not updated after getsearch, fixing
## 1/17 30min
* I ended yesterday thinking that the post delete update wasn't working, but it looks like it actually is
* yesterdays last jot dot finished
* a little bit of search css - containers, size, color
## 1/18 8h30min
* can't get height 100 to work, using verticalAlign top instead
* tried to adjust TransactionTableHolder, decided to start over instead
* added a variable to update when a search is posted - to check for, searchname might not change (ie LASTUSED) but updsearch should - know to get transactions again
* finished moving everything over into TransactionTableHolder2 - except using backend calls instead of props objects/arrays
* bolded prch keywords in note using [dangerouslysetinnerhtml](https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx) - see why there are some issues with which one it's being classified as, can use this as a tool to edit categories LATER
* backend getExpRep(search) wasn't sorting, is now (wow that took a while - put into a List and used Collections.sort), filters seem to be working - i have to write tests for sure later
* first catfilter solution was calling CatsController.identifyCat on every transaction - yea that takes way too long - but................eh it makes my code simpler and it shouldn't have to handle that much that often, i'll put it on the future list
* committing! deleting original Display and TransactionTableHolder
* display page layout - debated having a tableholder state, set to TransactionTableHolder or SummaryTableHolder - doesn't work, doesn't keep it updated, can't do that, using display none and inlineblock toggle instead
* decided it doesn't actually make sense to search -> summary, moving search back onto transactiontableholder
* starting summary table, styling and generating the vals and stuff-
* i can generate a style in javascript (ie when the color loads), so that when i create my elements, i can just give them a class instead of having to recreate them!! ie color separately, gonna do that now
  * can [createElement("style")](https://www.geeksforgeeks.org/how-to-create-a-style-tag-using-javascript/), and the element can have an id that can be selected, and innerHTML that contains all the css that can be edited - ie edit css rules using javascript!!
  * don't need to getcolors everytime
  * created colors.css with default colors (2 classes), header.js adds the id to the style on page load, updates the style (using the id) on color load (when page loads) and when chooseColor, taking out inline styles and instead adding classes ( TransactionTableHolder2, Search)
  * also cleaning up Header - putting into functions - like 5 new functions lolz
  * amazing! incredible! cleans up some code, + speeds things up quite a bit! + more synced - no longer reloading all transactions when colors change
* minimal, not so structured testing
  * error in TransactionTableHolder2 includes null - getexprep is returning an error and js is trying to read it - it's because search wasn't searching for "other" properly - going to have to check separately from the Search.checkfilters
  * little bug, sometimes the form fields from search aren't filled out, presumably because they haven't been set by the time getsearch has finished (ye getsearch then getcats finishes, doesn't show, other way does show), but the state of which to select isn't updating fast enough to select at the end of getcats, and I don't want to call it too much - wait, calling setCats later thinks catfilter is ""?? - not the best, redundant and not intuitive but when catfilter changes, document.queryselect the dropdown and set the value
  * sometimes the first LASTUSED changes??? later, can't recreate it rn
* back to summary - incredible! calculations for amounts per cat per mo and total lookin good, checked generally, + i've got the simplest avg/mo - my 2023 google sheets now has a couple of numbers that i directly edited so I can test - just leaving a record of the fact that i did that here

## 1/19 00-00:30
* tryna get a good vid, + organized the next features. listed below, for at this point (all still at this scale - no database/server)
* SIMPLE FUNC
  * other summary tables
  * negative sorts
  * time filter
  * interactive
  * charts
  * multiyear
  * summary more specific calcs, count/discount, based on days
  * edit summary
  * edit exprep - gonna be big
  * tithe check graph
  * 401k
  * budget based on number of counted days in selected months
  * other visual things that i had on Google sheets - color scale
* ADVANCED FUNC
  * upload (calls convert) + receipt match + check for emoji updates (with a (?) for how that works)
  * multifilter
  * ordered sort
  * multicategory sets
  * category priority for multimatch?
  * edit/review and count/discount - mark, filter, check/btn for all
  * export - copy paste, pdf
  * catfilter more efficient
  * encode/hide, or opt when export
* PROFESSIONAL
  * css
  * freeze table header
  * feedback/error check: search name (can’t be ?), category name, category multimatch, cat not other tot+ tot-
  * block out unused paid/received
  * tests
  * loading search not predictable???
## 1/19 5h
* working on color scale - rank, query select and set backgroundcolor+textcolor, scale (on hover, select <3), + called when colorchoose (uses color states - since not classes)
  * first try: scale rgb altogether, up and down - gets too dark and indistinguishable
  ```
      function scaleColPart(val, i) {
          return parseInt(val/255 * 1/(i+1) * 200 + 55) 
      }
          let color1Scale = []
          for (let i = 0; i < 12; i++) {
              let scaleRgb = {"r": scaleColPart(selectedColor1.r,i),"g": scaleColPart(selectedColor1.g,i),"b": scaleColPart(selectedColor1.b,i)}
              console.log("color scale", scaleRgb)
              color1Scale.push(rgbToHex(scaleRgb.r,scaleRgb.g,scaleRgb.b))
          }
  ```
  * second try: scale from color1 to color2 - idk i'll think about it, but it's working
  ```
      function perc2color(perc, selectedColor1, diffs) {
          var r = parseInt(selectedColor1.r + diffs.r*perc/100);
          var g = parseInt(selectedColor1.g + diffs.g*perc/100);
          var b = parseInt(selectedColor1.b + diffs.b*perc/100);
          console.log("color scale", perc, r, g, b)
          return rgbToHex(r,g,b)
      }
          let color1Scale = []
          for (let i = 0; i < 12; i++) {
              color1Scale.push(perc2color(i/12 * 100, selectedColor1, diffs))
          }
  ```
  * and some adjustments so it doesn't match exactly, so the other colors can be the styled colors + stays in range
* changed: color range to be represented by a css rule for a class, moving to header (functions, style), then in summarytable just apply class once, not color, and select based on class, not color
* incorporating other tables (transactions + by day), moving stuff into functions/states, element ids to select and change innerHTML, tabletype var - tricky
  * kinda fragile - wait for SUMMARIES and CATDATA to be set but then only do once
* 
