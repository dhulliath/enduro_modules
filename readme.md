These are various modules I've written for use with the [Enduro](https://github.com/Gottwik/Enduro) CMS, organized by how they fit into Enduro's structure.

# Abstractors

## sass.js
Create a sass object anywhere in the cms templates (I suggest global, but it doesn't really matter). The extra properties `sass_file` and `sass_prefix` will be automatically added. Values in the `sass` object are translated into a scss map variable and written to `sass_file` in /assets/css/ as the variable `sass_prefix`. 
Scss recompilation for production servers is thought to work (script triggers the gulp task), but untested.

**required node modules:**
* [json-sass](https://www.npmjs.com/package/json-sass)

# HBS_Helpers

## marked.js
Similar to the pre-existing markdown functions already out there, except this renders the markdown for render instead of adding it directly to the .js structure. Disadvantage is it does not generate header links, advantage is that any property can be rendered with markdown.

**required node modules:**
* [marked](https://www.npmjs.com/package/marked)