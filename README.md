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
		return (
			<Accordion>
				{[1, 2, 3, 4, 5].map((item) => {
					return (
						<AccordionItem title={`Item ${ item }`} key={item}>
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

## options / PropTypes

* **allowMultiple:** allow multiple items to be open at the same time (default: false)
* **activeItems:** receives either an array of indexes or a single index. Each index corresponds to the item order, starting from 0. Ex: activeItems={0}, activeItems=[0, 1, 2]

## License

This package is released under the MIT license.

Written based on the wonderful: daviferreira/react-sanfona