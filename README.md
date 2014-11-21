jquery_ajax_select
==================
Plugin that wrap native jquery load function with select fill functionality.

~~~javascript
$('select').load('/fake/url');
~~~

supported response from server

~~~json
[
    {"id":"data for select option value","title":"data for select option text"},
    {"id":"data for select option value","title":"data for select option text"},
    {"id":"data for select option value","title":"data for select option text"}
]
~~~
