install:
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .

calc:
		node bin/brain-calc.js

gcd:
		node bin/brain-gcd.js	