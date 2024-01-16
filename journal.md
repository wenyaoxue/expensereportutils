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
## 1/16 45min + 16:00-
* display parent component holds a variable for search name, and edits (child component's) get search drop down current value when set
* i'm getting an axios error on getsearches occasionally, i think it's because when you get, things are updated, so it tries to post a last used, so then it tries to get again before the post is done? that's my guess. let me look at my code. GET colors, POST search, GET searches - at beginning, sometimes error
* search overview:
  * NEW: constant search object defaultsearch with default vals
  * one state for each part of search (NEW: gets default values from defaultsearch)
  * function setSearchname - updates searchname state, updates apply search dropdown value
  * function savesearch: (NEW: (if current states != defaultsearch, ie if the page didn't just load - this appears to have fixed the previous error, no post search + get searches combo) POST current search) then (if not lastused - setApplySearch and clear savesearch input field)
  * function getsearch: GET apply search dropdown value, set all search states and form values, setSearchname
  * every time any search part is updated: call savesearch("LASTUSED")
  * at the beginning, setDateSelect (hardcoded arrays) and setCatSelect (GET cats) and setApplySearch (GET searches then update apply search dropdown and if called with a searchname (ie just posted) update apply search dropdown value + NEW: else (ie page just loaded) getsearch
  * function selectDate - sets daterangepickvar, startdate, and enddate
  * return
    * apply search dropdown - calls getsearch
    * sort buttons - updates state + NEW: calls setSearchname
    * date dropdown - calls selectDate - and daterangepickvar (which includes fields that updates state and calls setSearchname)
    * amtmin, amtmax, cat, unk, dtls form fields - updates state and calls setSearchname
    * savesearch form field - calls savesearch and calls setSearchname
