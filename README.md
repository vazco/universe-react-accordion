<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Accordion
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

React accordion component

## Installation

```sh
meteor add universe:react-accordion
```

## Usage

```javascript

import {Accordion, AccordionItem} from 'meteor/universe:react-accordion';

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

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Accordion is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**

Includes parts of code (also MIT) by [Davi Ferreira](http://www.daviferreira.com/)
