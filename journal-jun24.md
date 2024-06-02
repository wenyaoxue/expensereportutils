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
## FUTURE FUTURE
* break up transactions, split cost among multiple
* still getting color problems
* last month on savings chart is hardcoded
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
