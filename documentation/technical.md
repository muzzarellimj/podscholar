# Technical Documentation

This area of documentation will discuss the technical requirements of the assignment and how we intend to exceed them,
both as discussed in our meetings with Dr. Caporusso and Dr. Sanders, and in our meetings amongst the group. This
document is compartmentalised to discuss one area of our application per section, with each subheading discussing a 
more finite component of the development of that section. The sections include: [core](#core), discussing the primary
navigation components; [content](#content), discussing the creation and identification of podcast content; 
[query](#query), discussing the categorisation and searching of podcast content; [authentication](#authentication),
discussing the creation and management of user accounts and verification of author accounts; [user](#user), discussing
the searching and viewing of user and author profiles; [other](#other), discussing miscellaneous features that do not 
fit any other category; and [component](#component), discussing reusable components that will be featured in several 
sections.


## Core

### Home at `/`

### About at `/about`

### Pricing and FAQ at `/faq`

### Contact at `/contact`


## Content

### Podcast Upload at `/podcast/upload`

### Podcast Detail at `/podcast/:username/:title`

### Podcast Edit at `/podcast/:username/:title/edit`


## Query

### General Search at `/search/:query`

### Scientific Discipline Index at `/category`

### Keyword Index at `/keyword`


## Authentication

### Account Registration at `/register`

### Author Verification for Existing Account at `account/verify-author`

### Account Recovery at `/account/recover`

### Account Editing at `/account/edit/:section`


## User

### User and Author Detail at `/user/:username`

### User and Author Section Detail at `/user/:username/:section`


## Other

### Terms and Conditions at `/term-condition`


## Component

### General Search Bar

### Podcast Overview Card

### Collapsible Filter Menu