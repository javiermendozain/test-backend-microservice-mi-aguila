{{ template:logo }}

{{ template:badges }}

{{ template:description }}

Welcome to {{ pkg.name }}.
Enjoy code 💪

<!-- Content Table -->

{{ template:toc }}

<!-- Getting started  -->

{{ load:./doc/getting-started.md }}

{{ template:license }}

## Dependencies

{{ pkg.dependencies }}
