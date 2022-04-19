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

An entirely dynamic page to include a [general search bar](#general-search-bar), a feed filter bar to mimic that as seen 
[here](https://i.imgur.com/i8WC7pn.png), and a general 'most recent' feed with several [podcast overview cards](#podcast-overview-card).

### About at `/about`

A static page with content provided [here](https://muzzarellimj.github.io/full-stack-application-development/assignment/midterm/about.html)
and on the pitch document uploaded to Canvas. This section could attempt to mimic the [simple centered](https://tailwindui.com/img/components/content-sections.01-centered-xl.jpg)
or [split with image](https://tailwindui.com/img/components/content-sections.02-split-with-image-xl.jpg) approaches.

### Pricing and FAQ at `/faq`

A static page to mimic the [Tailwind UI approach](https://tailwindui.com/pricing) to a combined pricing and FAQ page. 
The pricing section could attempt to mimic the [simple multi-tier](https://tailwindui.com/img/components/pricing.08-three-tiers-xl.png) 
or [multi-tier with emphasis](https://tailwindui.com/img/components/pricing.05-three-tiers-with-emphasized-tier-xl.png)
approaches. The FAQ section could attempt to mimic the [two column with introduction](https://tailwindui.com/img/components/faq-sections.08-two-columns-with-description-xl.png) 
or [three column with introduction](https://tailwindui.com/img/components/faq-sections.05-three-columns-with-introduction-xl.png)
approaches.

### Contact at `/contact`

A static form including the usual contact form fields - name, email, phone, and message.


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