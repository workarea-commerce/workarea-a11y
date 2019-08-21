$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "workarea/a11y/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "workarea-a11y"
  s.version     = Workarea::A11y::VERSION
  s.authors     = ["Curt Howard"]
  s.email       = ["choward@workarea.com"]
  s.homepage    = "https://github.com/workarea-commerce/workarea-a11y"
  s.summary     = "Adds accessibility testing into the test suite of the Workarea Commerce Platform"
  s.description = <<~DESC
    This plugin integrates accessibility (a11y) tooling into the test suite,
    failing builds based on various uncovered WCAG offenses.
  DESC
  s.files = `git ls-files`.split("\n")
  s.license = 'Business Software License'

  s.add_dependency 'workarea', '>= 3.0.0'
  s.add_dependency 'axe_core_rails', '~> 3.2.2'
end
