# string #

String utilities.


## camelCase(str):String

Convert string to "camelCase" text.

See: [`pascalCase()`](#pascalCase), [`unCamelCase()`](#unCamelCase)

### Example

```js
camelCase('lorem-ipsum-dolor'); // "loremIpsumDolor"
camelCase('lorem ipsum dolor'); // "loremIpsumDolor"
```



## contains(str, substring):Boolean

Checks if string contains the given substring.

See: [`startsWith()`](#startsWith), [`endsWith()`](#endsWith)

### Example

```js
contains('lorem', 'or');  // true
contains('lorem', 'bar'); // false
```



## crop(str, maxChars, [append]):String

Truncate string at full words. Alias to `truncate(str, maxChars, append, true);`.

See: [`truncate()`](#truncate)

### Example

```js
crop('lorem ipsum dolor', 10);      // "lorem..."
crop('lorem ipsum dolor', 10, '+'); // "lorem+"
```



## endsWith(str, suffix):Boolean

Checks if string ends with specified suffix.

See: [`startsWith()`](#startsWith), [`contains()`](#contains)

### Example

```js
endsWith('lorem ipsum', 'lorem'); // false
endsWith('lorem ipsum', 'ipsum'); // true
```



## escapeHtml(str):String

Escapes HTML special chars (`>`, `<`, `&`, `"`, `'`).

See: [`unescapeHtml()`](#unescapeHtml)

### Example

```js
escapeHtml('lorem & "ipsum"'); // "lorem &amp;amp; &amp;quot;ipsum&amp;quot;"
```



## escapeRegExp(str):String

Escape special chars to be used as literals in RegExp constructors.

### Example

```js
str = escapeRegExp('[lorem.ipsum]'); // "\\[lorem\\.ipsum\\]"
reg = new RegExp(str);               // /\[lorem\.ipsum\]/
```



## escapeUnicode(str[, shouldEscapePrintable]):String

Unicode escape chars.

It will only escape non-printable ASCII chars unless `shouldEscapePrintable` is
set to `true`.

See: [`unescapeUnicode()`](#unescapeUnicode)

```js
escapeUnicode('føo bår');
// > "f\u00f8o b\u00e5r"
escapeUnicode('føo bår', true);
// > "\u0066\u00f8\u006f\u0020\u0062\u00e5\u0072"
```



## hyphenate(str):String

Replaces spaces with hyphens, split camelCase text, remove non-word chars,
remove accents and convert to lower case.

See: [`slugify()`](#slugify), [`underscore()`](#underscore),
[`unhyphenate`](#unhyphenate)

```js
hyphenate(' %# lorem ipsum  ? $  dolor'); // "lorem-ipsum-dolor"
hyphenate('spéçïãl çhârs');               // "special-chars"
hyphenate('loremIpsum');                  // "lorem-ipsum"
```



## interpolate(str, replacements[, syntax]):String

String interpolation. Format/replace tokens with object properties.

```js
var tmpl = 'Hello {{name}}!';
interpolate(tmpl, {name: 'World'});       // "Hello World!"
interpolate(tmpl, {name: 'Lorem Ipsum'}); // "Hello Lorem Ipsum!"
```

It uses a mustache-like syntax by default but you can set your own format if
needed. You can also use Arrays for the replacements (since Arrays are
objects as well):

```js
// matches everything inside "${}"
var syntax = /\$\{([^}]+)\}/g;
var tmpl = "Hello ${0}!";
interpolate(tmpl, ['Foo Bar'], syntax); // "Hello Foo Bar!"
```



## lowerCase(str):String

"Safer" `String.toLowerCase()`. (Used internally)

### Example

```js
(null).toLowerCase();      // Error!
(undefined).toLowerCase(); // Error!
lowerCase(null);           // ""
lowerCase(undefined);      // ""
```



## lpad(str, minLength[, char]):String

Pad string from left with `char` if its' length is smaller than `minLen`.

See: [`rpad()`](#rpad)

### Example

```js
lpad('a', 5);        // "    a"
lpad('a', 5, '-');   // "----a"
lpad('abc', 3, '-'); // "abc"
lpad('abc', 4, '-'); // "-abc"
```



## ltrim(str):String

Remove white-spaces from beginning of string.

See: [`rtrim()`](#rtrim), [`trim()`](#trim)

### Example

```js
ltrim('   lorem ipsum   ');  // "lorem ipsum   "
```



## makePath(...args):String

Group arguments as path segments, if any of the args is `null` or `undefined`
it will be ignored from resulting path. It will also remove duplicate "/".

See: [`array/join()`](array.html#join)

### Example

```js
makePath('lorem', 'ipsum', null, 'dolor'); // "lorem/ipsum/dolor"
makePath('foo///bar/');                    // "foo/bar/"
```



## normalizeLineBreaks(str, [lineBreak]):String

Normalize line breaks to a single format. Defaults to Unix `\n`.

It handles DOS (`\r\n`), Mac (`\r`) and Unix (`\n`) formats.

### Example

```js
// "foo\nbar\nlorem\nipsum"
normalizeLineBreaks('foo\nbar\r\nlorem\ripsum');

// "foo\rbar\rlorem\ripsum"
normalizeLineBreaks('foo\nbar\r\nlorem\ripsum', '\r');

// "foo bar lorem ipsum"
normalizeLineBreaks('foo\nbar\r\nlorem\ripsum', ' ');
```



## pascalCase(str):String

Convert string to "PascalCase" text.

See: [`camelCase()`](#camelCase)

### Example

```js
pascalCase('lorem-ipsum-dolor'); // "LoremIpsumDolor"
pascalCase('lorem ipsum dolor'); // "LoremIpsumDolor"
```



## properCase(str):String

UPPERCASE first char of each word, lowercase other chars.

### Example

```js
properCase('loRem iPSum'); // "Lorem Ipsum"
```



## removeNonASCII(str):String

Remove [non-printable ASCII
chars](http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).

### Example

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // "lorem-ipsum"
```



## removeNonWord(str):String

Remove non-word chars.

### Example

```js
var str = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
removeNonWord(str); // "lorem - ipsum"
```



## repeat(str, n):String

Repeat string n-times.

### Example

```js
repeat('a', 3);  // "aaa"
repeat('bc', 2); // "bcbc"
repeat('a', 0);  // ""
```



## replaceAccents(str):String

Replaces all accented chars with regular ones.

**Important:** Only covers **Basic Latin** and **Latin-1** unicode chars.

### Example

```js
replaceAccents('spéçïãl çhârs'); // "special chars"
```



## rpad(str, minLength[, char]):String

Pad string from right with `char` if its' length is smaller than `minLen`.

See: [`lpad()`](#lpad)

### Example

```js
rpad('a', 5);        // "a    "
rpad('a', 5, '-');   // "a----"
rpad('abc', 3, '-'); // "abc"
rpad('abc', 4, '-'); // "abc-"
```



## rtrim(str):String

Remove white-spaces from end of string.

See: [`trim()`](#trim), [`ltrim()`](#ltrim)

### Example

```js
rtrim('   lorem ipsum   '); // "   lorem ipsum"
```



## sentenceCase(str):String

UPPERCASE first char of each sentence and lowercase other chars.

### Example

```js
var str = 'Lorem IpSum DoLOr. maeCeNnas Ullamcor.';
sentenceCase(str); // "Lorem ipsum dolor. Maecennas ullamcor."
```



## stripHtmlTags(str):String

Remove HTML/XML tags from string.

### Example

```js
var str = '<p><em>lorem</em> <strong>ipsum</strong></p>';
stripHtmlTags(str); // "lorem ipsum"
```



## startsWith(str, prefix):Boolean

Checks if string starts with specified prefix.

See: [`endsWith()`](#endsWith), [`contains()`](#contains)

### Example

```js
startsWith('lorem ipsum', 'lorem'); // true
startsWith('lorem ipsum', 'ipsum'); // false
```



## slugify(str[, delimeter]):String

Convert to lower case, remove accents, remove non-word chars and replace spaces
with the delimeter. The default delimeter is a hyphen.

Note that this does not split camelCase text.

See: [`hyphenate()`](#hyphenate) and [`underscore()`](#underscore)

### Example

```js
var str = 'loremIpsum dolor spéçïãl chârs';
slugify(str); // "loremipsum-dolor-special-chars"
slugify(str, '_'); // "loremipsum_dolor_special_chars"
```



## trim(str):String

Remove white-spaces from beginning and end of string.

See: [`rtrim()`](#rtrim), [`ltrim()`](#ltrim)

### Example

```js
trim('   lorem ipsum   '); // "lorem ipsum"
```



## truncate(str, maxChars, [append], [onlyFullWords]):String

Limit number of chars. Returned string `length` will be `<= maxChars`.

See: [`crop()`](#crop)

### Arguments

 1. `str` (String) : String
 2. `maxChars` (Number) : Maximum number of characters including `append.length`.
 3. `[append]` (String) : Value that should be added to the end of string.
    Defaults to "...".
 4. `[onlyFullWords]` (Boolean) : If it shouldn't break words. Default is
    `false`. (favor [`crop()`](#crop) since code will be clearer).

### Example

```js
truncate('lorem ipsum dolor', 11);             // "lorem ip..."
truncate('lorem ipsum dolor', 11, '+');        // "lorem ipsu+"
truncate('lorem ipsum dolor', 11, null, true); // "lorem..."
```



## typecast(str):*

Parses string and convert it into a native value.

### Example

```js
typecast('lorem ipsum'); // "lorem ipsum"
typecast('123');         // 123
typecast('123.45');      // 123.45
typecast('false');       // false
typecast('true');        // true
typecast('null');        // null
typecast('undefined');   // undefined
```



## unCamelCase(str):String

Add space between camelCase text and convert first char of each word to lower
case.

See: [`camelCase()`][#camelCase]

### Example

```js
unCamelCase('loremIpsumDolor'); // "lorem ipsum dolor"
```


## underscore(str):String

Replaces spaces with underscores, split camelCase text, remove non-word chars,
remove accents and convert to lower case.

See: [`slugify()`](#slugify), [`hyphenate()`](#hyphenate)

```js
underscore(' %# lorem ipsum  ? $  dolor'); // "lorem_ipsum_dolor"
underscore('spéçïãl çhârs');               // "special_chars"
underscore('loremIpsum');                  // "lorem_ipsum"
```



## unescapeHtml(str):String

Unescapes HTML special chars (`>`, `<`, `&`, `"`, `'`).

See: [`escapeHtml()`](#escapeHtml)

### Example

```js
unescapeHtml('lorem &amp;amp; &amp;quot;ipsum&amp;quot;'); // 'lorem & "ipsum"'
```



## unescapeUnicode(str):String

Unescapes unicode char sequences.

See: [`escapeUnicode()`](#escapeUnicode)

```js
unescapeUnicode('\\u0066\\u00f8\\u006f\\u0020\\u0062\\u00e5\\u0072');
// > 'føo bår'
```



## unhyphenate(str):String

Replaces hyphens with spaces. (only hyphens between word chars)

See : [`hyphenate()`](#hyphenate)

### Example

```js
unhyphenate('lorem-ipsum-dolor'); // "lorem ipsum dolor"
```


## upperCase(str):String

"Safer" `String.toUpperCase()`. (Used internally)

### Example

```js
(null).toUpperCase();      // Error!
(undefined).toUpperCase(); // Error!
upperCase(null);           // ""
upperCase(undefined);      // ""
```

-------------------------------------------------------------------------------

For more usage examples check specs inside `/tests` folder. Unit tests are the
best documentation you can get...

