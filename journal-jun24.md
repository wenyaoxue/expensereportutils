## 6/1 5h + 25min net zero work done
* working on summary charts/widgets
  * figuring out how to handle blocks, no transaction edge cases
    * full -> minimized -> select months where edge case, becomes text -> select non edge months = get all data + still inline
    * moving edge case text more into the structure of non-edge cases, so that it's not re-rendering with default display inline-block etc. going okay
    * looks like it worked
  * moving some stuff into subcomponents, cleaning up code
  * matching edge case text view
  * just let out the biggest cackle: display: "flex", alignItems: "center" - only for inline-blocks, this will override the blockness of children - nice!!! now we got them aligned when collapsed. yayyayayyaay
  * on load click eyes (collapse all) - click instead of set, because i'm not sure but I'm worried hardcoding the negative will mess things up or smt idk
  * added collapse and expand all controls, updated displays when individual control is clicked
  * added double click tithe summary to see all tithes
* working on header
  * moving some stuff around, getting rid of redundancies
    * show details link on summary that sets search to dstmos!!!
* decision paralysis
* working on a SummaryCatController
  * parallel to SummaryMoController - gonna be a big task, a way for me to procrastinate lolz
  * finished creating the controller
  * finished updating the select i think (wanted to try something fancier/more efficient but too complicated)
    * btw: this solves the same row different col or something unselects
  * for click to remove/add category: note will have to update summaries dict
  * cannot figure out how to arrange zoomed cells so the intersection is actually on top
    * looks like z-index doesn't work on table cells
## 6/2 6h25
* duplicates after update???
* updating things with selCats changing - table, other stuff. is quite invasive
  * savings cat bar (parallel to paid bar... idk)
  * changing some selects to querySelectorAll instead of checking all cats
  * CATDATA -> selCats
  * useEffect on selCats
* gonna pivot for a while to work on categories page
  * thinking about a permanent other on categories - so it doesn't need its own edge case ... idk
  * can't delete cat tithe or income or other (altho no other)
  * prevent from adding other
  * stacking vertically
```
.display {
    background-color: aqua;
    min-height: 10px;
    max-height: 400px;
    flex-wrap: wrap;
    flex-direction: column;
    display: flex;
    overflow: auto;
}
```
  * making things look nicer - icons, collapsible pieces, colors, etc.
  * sorted display by most to least purchases ... ya maybe this is better idk
  * sorted dropdown alphabetically
* pivoting again - cleaning up summary table
  * legend table icons and text - easier to understand, and gets selected on hover table! (for both intra and inter)
  * row345 also can rank inter
  * savings text invisible until hovered! thinking of stacking cat on top of month - yea
  * added summariesByCat - and 2 bars in savings, why is it so hard to get them to fit properly - starting a util to do generically, testing ish in savings.js, will be used from there i guess
    * the reason the bar doesn't fit is because summariesByCat is not updated with dstmos... ah geez

## 6/3 25min + 1h25min
* created an EXPREP state, moving things into useEffect on EXPREP and CATDATA
* note budget is causing a lot of problems, will have to circle back eventually, for now value is just 1
* tried moving stuff into functions
* net zero observable differences lol except breaking budget
* tithe and outlier charts broken sometimes
* functions/comments
* working on a generic stacked bar - not so bad :)
## 6/8 ~45min
* progress on generic stacked bar - adding things like class and setHovered, goin well, got rid of old month savings bar, this works and looks in code and on the page much better
## 6/11 4h
* pretty much finished generic stacked bar, polymorphism - less vars sent, tested a lot to make sure all good before deleting old stuff
* thinking about how to structure these dicts so they represent the same vals - both dstmo and cat control both the net charts
* added a total column to the table, to compare
* getting rid of borderLefts
* keeping summaries by cat totals updated ....hmmmm
  * keeping summariesbycat and summariesbycattots separately - looks okay at general checks
* some rounding issues, but generally the savings bars are way better! easier to control size, easier to understand - more standardize, all fits
* swapped out some buttons for icons, trying to set their placement
* adding a hovered general summary up top - gotta put this all in a component later
* note other in summariesByCatTots ?? not sure
## 6/12 maybe 4.5+ hrs?
* computer crashed around 00:55. lost my log here too. :/
* but good progress!
* added other to summariesByCatTots
* added hoverfeedback, table with calculations and [display](https://stackoverflow.com/questions/6297591/how-to-invert-transpose-the-rows-and-columns-of-an-html-table) controlled based on frozen or not
* added freezer/microwave, and sub one for widget, can control what on summary to freeze
* i think that's it??? sad i lost my log but at least i lost no work
## 6/13 2h20m
* found some problems while updating my own stuff
![image](https://github.com/wenyaoxue/expensereportutils/assets/119467979/3be2152f-50bb-4ecd-baa8-a008bcbf19b5)
![image](https://github.com/wenyaoxue/expensereportutils/assets/119467979/924710c5-5885-4969-be4f-e2078caa33aa)

Called update transactions
{"id":"1391","Date":"06-08-2024","Time":"","Type":"P","Amount":12.98,"Note":"target gg vegetable and brioche pas 00025163091 allen tx","Unknown":"","Details on":"discover 0608","Reviewed":"06-13-2024","Discount":""}
might have something to do with IDs?
* put view toggle in a component
* view and freeze toggles shown when hovered over relevant component + transparent until hovered on toggle itself
* made most of the controls on summary like that - hidden until hovered the item it controls, transparent until hovered the control
  * will have to think. opacity 0-1 or display inline or none, none means the spacing will change, because it'll try to stay centered, not sure how to center
* cleared out borders
* moved hoverfeedback around
* spent alot of time today just playing with things - lot of interactive things added today
## 6/16 45min net zero visible changes (i hope) + 2h net zero functional changes (i hope), just some organizing/divs/components
* trying to figure out how to handle this unselected cat widget
* continued thinking about unselected widgets, seems too daunting. gonna pivot for a bit
* moved transparent on mouseLeave opaque on mouseEnter and default transparent to a component ActionButton. moved other stuff into functions and into versions of this component. hopefully still net zero visible changes, at least functionally, just some alignment stuff - hopefully that's all
## 6/22 40+min cleaning up toggles
* cleaning up toggles
## FUTURE FUTURE
* if width % gets under certain fixed size, use arrows page
* click and drag to select details
* double click transaction to search???
* details weekday search
* handle zoom in more cleanly
* summariesbymo +- for hoveredFeedback cross + -
* unselected cats widget
* handle tied rank
* break up transactions, split cost among multiple
* still getting color problems
* hover by value legend not great, not hovering all, + how to choose which categories to include
* rank the savings
* figure out budget
* edit notecleaner
* change categories
* last edited/imported
* mass note edit
* exportable reports
* categories page
* zoom timing, + size
* outlier chart only uses months??????????? don't know what i meant
  * duplicate checker, search by ...
  * don't reload on post/delete - need to also update search; scroll to spot; other changes - maybe a notification
  * redundant categorisation
  * note cleaner edit / apply to already saved - update all
  * api wait, error messages
  * end to end what needs to be updated when a delete/update happens - eg make sure summary updates
* percentages on summary
  * show/hide search and chart are super slow???
  * user sizable
  * explanations of the search
  * explanations of the transaction format
  * hover over action items
  * ids going back, based on array - no good
  * hover: make sure actual hover is on top
  * print, export stats
