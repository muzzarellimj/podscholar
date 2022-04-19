# PodScholar: `static`

The `static` branch is an isolated environment to test static HTML and CSS prior to implementing it in our Node 
environment. The `main` branch should be the most up-to-date as far as proper functionality - this is more of a test 
suite.

Technical documentation (route overview, component design, etc.) can be found [here](documentation/technical.md).

## Usage

[Bootstrap 5.1](https://getbootstrap.com/docs/5.1/) is a vendor asset in our project, and due to the lack of a package 
manager in this environment, the source code must be included, imported in 
[our Sass stylesheet](asset/css/primary.sass), and compiled for runtime. To this end, a file watcher should be created
with [WebStorm](https://www.jetbrains.com/help/webstorm/using-file-watchers.html#ws_creating_file_watchers) or 
[this](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) VSC extension. Note: the file watcher 
should **only** watch and compile `primary.sass` - all other files can be ignored and imported to the aggregate script 
as necessary to save space.