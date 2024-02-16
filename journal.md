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
## 1/20 6h30min
* onClick reading and setting state doesn't seem to work. gonna do buttons
* moving table setting into functions - on load creates all cells (and moved as early as possible), on SUMMARIES and CATDATA set fills all values, applycolorscale when u fill a row
* all 4 table types lookin good, format for which type
* selectedScale - doesn't work on first refresh, but if i save and then go again it works,, function is being established before the category cells have been created, and the document.querySelector is not updating at the time i think? weird. moving applyLegend to after categoriesrows are added, I think that will fix it -- so there is stuff in functions that doesn't work dynamically,, idk, jk that didn't fix it, i see - it's because catdata length was being sent as a param - still!!! not working!!!! ... only works if I call applyLegend in the useEffect where CATDATA has been set. annoying. creating functions calculates stuff once, not .. eh whatever. 4 tables done
* per day tables divide by 29, 30, or 31 (dep on month) - not just 31 across the board
* tryna update a state in a function - same problem as that paragraph i think,,,, oy
* checkbox for which months to average looks good, don't wanna check thoroughly - should write tests later
* thinking about how to make it interactive, tr can't have a border so I thought about and worked through inserting surrounding empty rows (learned u can do ele.remove(), <td colspan=15, insertAdjacentElement) - decided instead to add selectedCell 
* same prob as above: recalcAvgs (which is linked to elements (row 2) before SUMMARIES is set), which is calling getRowVals, which is using SUMMARIES, doesn't work on first load (SUMMARIES is empty). on a save and refresh, it's fine. going to link recalcAvgs to the elements after SUMMARIES is set. yea that worked. nice
* note: opt parameter, when send don't need to say paramname = whatever, u can just send 1 more param
* note having `[somevals].forEach()` is tricky idk why, can't put smt before it
* hovering selects: a label => row/col, inner: row and col
* same prob as above: selectMonth (which is linked to elements (row1 and row2) before CATDATA is set is using CATDATA, doesn't work on first load (CATDATA is empty). on a save and refresh, it's fine. going to link selectMonth to the elements after CATDATA is set. a couple more places this time
* working on budget - cells contentEditable, onKeyDown only allow nonnumbers, default values just above avg/mo, check budget (whenever you type) and add class, note currently have to focus only on amount total table, note negatives messy, note gotta add a post/get, + add a bunch of charts and i'll have finished everything in google sheets besides edit exprep
```
            ocat.onkeydown = e => {
                let allow = (e.key >= '0' && e.key <= '9') || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Backspace" || e.key === "Delete"
                if (!allow)
                    e.preventDefault()
            }
            ocat.contentEditable="true"
```
## 1/22 or 23, not sure 4h10min
* working on budget - backend file structure, default when filling row, button selects posts budget values, be path/fe req, keep when table change, post
* so to reiterate .... if a function uses a state, the function needs to be reassigned everytime the state val changes. don't rlly get it but ok
* thinking about and trying to split summarytableholder into more components; appending a component in js doesn't seem to be a good idea - gonna try and rework into map? oy. so instead of adding/updating basically all elements dynamically, i'm gonna make 1000 more components - this'll take awhile but if i don't, there's just too much code, too much stuff to have to change on each thing, and i think this might keep me from having to reassign stuff? if the props are passed i think it's supposed to auto re-render
* components => warnings, i found this: `suppressContentEditableWarning={true}` - fantastic
* gotta take a break - come back with ranking
## 1/24 3h5min
* working on ranking - did some unnecessary messing with it
* averages - idk trying to figure a way that makes sense -complic cuz idk when things update, ...rerender, eh whatever
* nervous bc idk how often each component rerenders ..........................????
* budget class - not done, very confusing
* not continuously calling whatever's inside {}, obviously but idk. it's true it was simpler to have variables to reference for every element without components
* thought about abandoning the past 2 days work and just going back to noncomponents --------- idk, it's very enticing
## 1/26 4h40m
* creating a new exprep file, minor structure tweak, + now we have multiple years [website](https://www.convertcsv.com/csv-to-json.htm) again
* transaction table broken - had an empty amount cell that saved as null - no gud - smh okay
* have to account for multi years - not directly sorting by month and hardcoded year
  * started working on stuff, oh geez i don't want another branch of big changes. i think for sure i'm gonna use this new branch of summarytableholder bc it's nice to not have to add and then fill, and then fill again on each change. gonna commit to the componentifying of the summarytableholder
  * summarytable needs dynamic columns may be <> 12, changing summaries structure - idk why printing as things are added to it isn't working? logs the newest val withe everything in it already somehow - ykno what i'm just gonna take it as some asyncness and that it'll be hard to tell exactly how it's going by logging. sucks. also not sure how to structure summaries - thinking thru / trying some diff options... decision paralysis ... any change is gonna be so widespread. darn
    * as i try to apply - working through some kinks of componentified, elements are not rendered immediately (ie by the time useeffect is called) - urgh, moving cells into components, then select should work?
    * i guess useeffect for default value is not so good, gonna use a state ugh
    * got some errors with select/deselect before fully loaded..urgh
    * tried to figure out some number discrepancies, oy, didn't figure it out (some marking r instead of p but idk) but it looks okay enough...idk
    * summary categorizing and details categorizing is not the same.. argh
    * even now, with this defined in the row component: - assigning selectThisRow(document.querySelector...) not working on first load :( sucky idk why. guess i'll just put it directly in the return, instead of adding to each element on render? lame
    * fixing average
  * moving some props into a component to import thru functions like apireqs (MonthUtil)
  * change search datepicker (+ quick if change custom start to be after end, end gets changed too)
  * need to change scale - dynamically created
## 1/30 3h20min
* reviewing selenium for tests
* gotta finish date filter - select all or custom (already done) or month
  * year/month options come from transaction table limits, and are synced, and changing one doesn't change the other if possible
  * committing, deleting other dateselect
  * when loading, if all default to all, if exact month, default to DstMoPick with loaded value
    * still struggling with this first load problem - nah, this is just because firstmo and lastmo are being set, gotta wait for them to pass certain checks - making a function to useEffect
    * problem with hardcoded default values - if it's the same setting (all custom or month), it's applying to the form overrides the getsearch applying to the form
      * i have a var that holds a component, and when resetting that var (same component) it doesn't call that component's useEffect(func, [])?? so i added the variables that are changing to the useeffect, idk
    * using a few useEffects - sucks because not so clear and might happen a lot
  * switch to type month, try and be relatively close - first pass algo looks good, + check if in range (ie custom may be out of range)
  * search date adjusted for multiyear done
## 2/3 20min
* started a transaction form to save a new transaction, learned of property tabindex
## 2/8 3h20min
* working on the transaction form, controlling/validating input, trying to decide how it would work, eh
* got a valid object to post, could be better, can't believe that took so long
* couldn't get element.click() to work or other trigger events
## 2/10 10min
* starting the backend post
## 2/11 4h10min
* note: posted object variable names should be lowercase - see [here](https://stackoverflow.com/questions/38935912/requestbody-is-getting-null-values)
* working on post:
  * finished sending and adding to file
  * setting up on post =>
    * update data file
      * note i already had: search change => reload
      * note adding post => setUpdSearch => reload table shown on post (doesn't reload search dropdown, but can come back to this - simple enough) + by the time u switch to summary it'll be updated - not doing this
      * i could on post => set a variable that's shared with search, and search useeffect to reset its search... but i don't want to, i think - if u have a search - u don't want to mess it up just bc u post, yea let's not
      * just gonna use a variable to tell search form to update its dropdowns
        * update if startdate and enddate are exact beginning and end of month, set to dropdown: IF inside FIRSMOLASTMO
        * dropdown updating on post, i think it's good? things are quite complicated - a lot to look through. not being so thorough with checks atm
        * forcing summary update on every new transaction
* added some more validations for new transactions
* all -> custom, not default filling the vals - daterangepick useeffect setting vals normalizes with 0s - search seems to be working fine, so. local fix looks good
* adding delete link
  * accidentally deleted entire file, very great smh
  * gonna use this opportunity to check how things go without a file / very few transactions
    * search set
    * added a placeholder with a starter message on summary
    * search change default year to this year
    * also this was happening before: select month > change month > changes to custom, small fix was using 2023 instead of var
  * work through delete with very few transactions
    * file update
    * also previously overlooked: update table if ur in all date selection (update search all)
    * updated my previous variable (to update summary and search (which updates table if necessary)) to also handle deletes, working on getting search updates after delete
## 2/15 2h45min
* finished delete updates view - simple
* got my data back - simple
* categories: show ambiguous or undefined transactions
  * adjusted formula and default set just a little - the big change will be adding more to the backend file, priority or something (also causing get exprep by search to not match totally)
* added other row to summary table - moderately simple
* front end export - before edit, just in case - jk, thought about it and nah, i'll just keep a copy in the back, I don't want to have to maintain different formats
* setting the stage to work on edit - that's also part of the categorizing thing, want to be able to do things with the data shown
  * totally gonna break these rows into components later, maybe the same as the form? as the table in the cat manager?
  * oy gotta move bold, categorize, color, into the transaction component........or maybe just wait until save
  * trying to make the cells bigger
  * just... thinking, decision paralysis
