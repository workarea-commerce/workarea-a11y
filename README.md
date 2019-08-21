Workarea A11y
================================================================================

A Workarea Commerce plugin that integrates [Deque's aXe Accessibility
Engine](https://www.deque.com/axe/) into your project's test suite, failing
tests for pages that are found containing WCAG offenses.

Currently this plugin:

* is not configurable
* only checks against Storefront
* will fail CI builds until offenses are fixed
* will fail your local tests until offenses are fixed
* works for all versions of Workarea greater-than or equal to v3.0.0

This plugin is also intended to be used in tandem with the [aXe Chrome Developer
Tools](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd/related?hl=en-US)
which can give you _much more insight_ into what's going on when you're trying
to debug the offenses.

Getting Started
--------------------------------------------------------------------------------

Add the gem to your application's Gemfile:

```ruby
# ...
gem 'workarea-ally'
# ...
```

Update your application's bundle.

```bash
cd path/to/application
bundle
```

Usage
--------------------------------------------------------------------------------

Install this plugin and run:

```bash
bin/rails workarea:test:storefront
```

Or push your branch up to your project's remote repository and check the CI build.


Gotchas
--------------------------------------------------------------------------------

The aXe Chrome Developer Tools are run by the developer on-demand, which can
differ from the automatic approach taken by this plugin. This means that your
results may vary when using both approaches in tandem. The Developer Tools will
often uncover more offenses than the test suite integration so it is recommended
that both be used.

The Developer Tools can also be affected by other Chrome extensions. For
example, the LastPass Chrome Extension will apply an overlay to inputs of type
'email' to show the user that LastPass may be able to interact with the field.
Using the Developer Tools, aXe will throw a warning because of this, since it is
run manually after the page and LastPass have loaded, whereas the test
integration will not have the LastPass extension loaded.

This plugins is also only able to test pages that the test suite covers. In this
way it acts quite similarly to the v3.2.0 Duplicate ID checker feature in
Workarea.

Be sure to keep these gotchas in mind while you work to stay efficient while
working through the reported offenses.


Workarea Commerce Documentation
--------------------------------------------------------------------------------

See [https://developer.workarea.com](https://developer.workarea.com) for Workarea Commerce documentation.

License
--------------------------------------------------------------------------------

Workarea A11Y is released under the [Business Software License](LICENSE)
