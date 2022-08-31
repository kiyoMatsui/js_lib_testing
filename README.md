# js_lib_testing

A copy of the js anyascii project as a small node lib that is expanded for testing different things.

Original: https://github.com/anyascii/anyascii

## some notes...
using ESM not commonjs.

## test package
```
npm pack
```
Then to install this module in a different node app.
```
npm install /some/dir/js_lib_testing/any-ascii-0.3.2-dev.tgz
```

The below should work in the new app.
```
import anyAscii from 'any-ascii';
console.log("Checking paths");
```

# AnyAscii

Unicode to ASCII transliteration

[**Web Demo**](https://anyascii.com)

Converts Unicode characters to their best ASCII representation

AnyAscii provides ASCII-only replacement strings for practically all Unicode characters. Text is converted character-by-character without considering the context. The mappings for each script are based on popular existing romanization systems. Symbolic characters are converted based on their meaning or appearance. All ASCII characters in the input are left unchanged, every other character is replaced with printable ASCII characters. Unknown characters and some known characters are replaced with an empty string and removed.

```javascript
import anyAscii from 'any-ascii';

const s = anyAscii('άνθρωποι');
// anthropoi
```

`npm install any-ascii`

[**FULL README**](https://github.com/anyascii/anyascii)
