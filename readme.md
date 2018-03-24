These are various modules I've written for use with the [Enduro](https://github.com/Gottwik/Enduro) CMS, organized by how they fit into Enduro's structure. MIT license. Have fun. 
There's no guarantee these'll work directly out of the box; I'm awful at testing all use cases. At the least you'll have a decent starting point.

# Abstractors

## sass.js
The intention for this is to allow admin interface users to easily change stylesheet variables.
Create a sass object anywhere in the cms templates (I suggest global, but it doesn't really matter). The extra properties `sass_file` and `sass_prefix` will be automatically added. Values in the `sass` object are translated into a scss map variable and written to `sass_file` in /assets/css/ as the variable `sass_prefix`. 
Scss recompilation for production servers is thought to work (script triggers the gulp task), but untested.
##### required node modules
* [json-sass](https://www.npmjs.com/package/json-sass)

# HBS_Helpers

## marked.js
Similar to the pre-existing markdown functions already out there, except this renders the markdown for render instead of adding it directly to the .js structure. Disadvantage is it does not generate header links, advantage is that any property can be rendered with markdown.
##### Usage
```
{{{marked property}}}
```
##### required node modules
* [marked](https://www.npmjs.com/package/marked)

## sort_this_by.js
Takes a given context, sorts the values by the specified property, and returns the resorted array (does not mutate the CMS).
Can be nested for multiple sorting parameters. You can use decimal notation to sort by subproperties.
##### Usage
```
{{#sort_this_by context property}}
    {{#each this}}

    {{/each}}
{{/sort_this_by}}
```
##### required node modules
* [array-sort](https://www.npmjs.com/package/array-sort)