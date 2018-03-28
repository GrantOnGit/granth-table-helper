## TableHelper ##

Core functionality used to create reactive tables. Use this to build table templates for Blaze.

### What TableHelper is and what TableHelper is not ###

TableHelper is designed for displaying data and collecting user input. You are responsible for data manipulation and event handling.

TableHelper does not provide any data manipulation functionality such as sorting, searching or filtering. It displays the data in the order the you provide it.

TableHelper collects inputs from the user and fires events based on that input. But it is your responsibility to react to these events.


### FilterHelper ###

If you need a more full-featured plugin that provides the following:

- Subscription management
- Filtering
- Sorting
- Pagination
- Search
- Export to CSV / Excel

Then we suggest using the granth:filter-helper plugin [available here]. This plugin builds on top of TableHelper but provides much more functionality.