#!/usr/bin/env rake
begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

APP_RAKEFILE = File.expand_path('../test/dummy/Rakefile', __FILE__)
load 'rails/tasks/engine.rake'
load 'rails/tasks/statistics.rake'
load 'workarea/changelog.rake'
require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/**/*_test.rb'
  t.verbose = false
end

task default: :test

$LOAD_PATH.unshift File.expand_path('../lib', __FILE__)
require 'workarea/a11y/version'

desc "Release version #{Workarea::A11y::VERSION} of the gem"
task :release do
  host = "https://#{ENV['BUNDLE_GEMS__WEBLINC__COM']}@gems.weblinc.com"

  #Rake::Task['workarea:changelog'].execute
  #system 'touch CHANGELOG.md'
  #system 'git commit -m "Update CHANGELOG"'
  #system 'git push origin HEAD'

  system "git tag -a v#{Workarea::A11y::VERSION} -m 'Tagging #{Workarea::A11y::VERSION}'"
  system 'git push --tags'

  system 'gem build workarea-a11y.gemspec'
  system "gem push workarea-a11y-#{Workarea::A11y::VERSION}.gem"
  system "gem push workarea-a11y-#{Workarea::A11y::VERSION}.gem --host #{host}"
  system "rm workarea-a11y-#{Workarea::A11y::VERSION}.gem"
end
