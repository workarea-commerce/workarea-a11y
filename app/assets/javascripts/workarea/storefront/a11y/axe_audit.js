//= require axe_core_rails/axe.min

/**
 * @namespace WORKAREA.axeAudit
 */
WORKAREA.registerModule('axeAudit', (function () {
    'use strict';

	var formatResults = function (results) {
            var result = [];

            result.push('\r\n');
            result.push('***************** BEGIN aXe AUDIT *****************');
            result.push('');
            result.push('CURRENT PATH: ' + window.location.pathname);
            result.push('');
            result.push('VIOLATIONS FOUND: ' + results.violations.length);
            _.forEach(results.violations, function (violation, index) {
                result.push('\r\n*****\r\n');
                result.push('VIOLATION #' + (index + 1) + ':');
                result.push('  Severity: ' + violation.impact);
                result.push('  Description: ' + violation.help);
                _.forEach(violation.nodes, function (node) {
                    result.push('');
                    result.push('Node: ' + node.html);
                    result.push('');
                    result.push(node.failureSummary);
                });
            });
            result.push('');
            result.push('****************** END aXe AUDIT ******************');
            result.push('');

            return result.join("\r\n");
        },

        report = function (error, results) {
            if (_.isEmpty(results.violations)) { return; }

            if (error) {
                throw new Error(
                    'WORKAREA.axeAudit: the aXe accessibility engine has ' +
                    'encountered the following error: ' + error
                );
            }

            throw new Error(formatResults(results));
        },

        pageNotApplicable = function () {
            return window.location.pathname.match(/style_guide/);
        };


    if (pageNotApplicable()) { return; }

    window.axe.run(document, report);

}()));

