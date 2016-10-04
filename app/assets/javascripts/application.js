//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs

//= require turbolinks
//= require turbolinks_compatibility
//= require react
//= require react_ujs

// Require PNotify (rails asset), unobtrusive flash (rubygems), and flashes (local code) early so that notifications
// render as quickly as possible.
// TODO: Remove require pnotify/pnotify.js when possible.
// The extra require is needed to avoid issue with incorrect require-order in main file.
//= require pnotify/pnotify.js
//= require pnotify
//= require flashes
//= require unobtrusive_flash

//= require moment
//= require bootstrap-datetimepicker
//= require pickers
//= require select2

//= require googleanalytics/autotrack
//= require google_analytics
//= require facebook_pixel
//= require navbar
//= require shift_for_hash
//= require founders
//= require limit_max_int
//= require inspectlet
//= require video
//= require jquery-stickit
//= require jquery.scrollTo
//= require ahoy
//= require jspdf

// Rails assets
//= require intro.js/intro.js
//= require perfect-scrollbar
//= require slick-carousel/slick.js

// Shared
//= require _shared

// Components
//= require components

// Controller-specific
//= require home
//= require faculty
//= require startups
//= require timeline_events
//= require resources
//= require about
//= require talent
//= require batch_applications
