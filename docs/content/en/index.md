---
title: Introduction
description: 'Page, component and data cache with cache tag invalidation'
position: 1
category: 'Getting started'
features:
  - "Cache: Page, component and data"
  - "Purge: Using cache tags or by key"
  - "Pick: Enable only what you need"
  - "Manage: REST API for purging and getting stats about the caches"
---

<alert type="warning">
This is the documentation for the V1 release, compatible with Nuxt 2.

<p>
  <a href="https://nuxt-multi-cache.dulnan.net">Switch to documentation for the Nuxt 3 compatible release of nuxt-multi-cache.</a>
</p>
</alert>

---

<p className="lead">
nuxt-multi-cache V1 is the all-in-one SSR caching solution for Nuxt 2 . It
offers a full page cache (with a static option), component render cache and a
general data cache for anything else.
</p>

---

<img src="/hero-image.svg">

---

<list :items="features"></list>

## Features
### Page cache
Cache and serve entire pages to offer blazing fast response times.

### Component cache
Render heavy components just once to reduce the time needed to render a page.

### Data cache
Prevent making API calls on every request. Just do it once and cache the
response.

### Purging
You can purge any cache entry (page, component, data) either by its key or by a
cache tag.

### Simple
By default nothing is cached. This helps to reduce complexity and makes
debugging much easier.
