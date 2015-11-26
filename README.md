# Universe Accordion
React accordion component

## Installation

```sh
meteor add universe:react-accordion
```

## [Demo](http://react-accordion.meteor.com)
Checkout the [demo](http://react-accordion.meteor.com)

## Usage
Components of this package use universe:modules package for import/export.
So you can import it by es6 import api `import {Accordion, AccordionItem} from '{universe:react-accordion}'`
or by `System.import('universe:react-accordion').then(function(module){/* your code */})` in regular js.

In CoffeeScript you can use package [universe:modules-for-coffee](https://atmospherejs.com/universe/modules-for-coffee)

```javascript

import {Accordion, AccordionItem} from '{universe:react-accordion}';

…

	render: function () {
	    const title = <h3>{item.label}</h3>;
		return (
			<Accordion>
				{[1, 2, 3, 4, 5].map((item) => {
					return (
						<AccordionItem title={title} key={item}>
							<div>
								{`Item ${ item } content`}
								{item === 3 ? <p><img src="https://cloud.githubusercontent.com/assets/38787/8015584/2883817e-0bda-11e5-9662-b7daf40e8c27.gif" /></p> : null}
							</div>
						</AccordionItem>
					);
				})}
			</Accordion>
		);
	}
…
```

## options / PropTypes

* **allowMultiple:** allow multiple items to be open at the same time (default: false)
* **activeItems:** receives either an array of indexes or a single index. Each index corresponds to the item order, starting from 0. Ex: activeItems={0}, activeItems=[0, 1, 2]

## License

This package is released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Include parts of code (also MIT) by [Davi Ferreira](http://www.daviferreira.com/)