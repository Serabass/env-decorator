"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rule = void 0;
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var typescript_1 = require("typescript");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-process-env',
        description: 'Disallows `process.env` statements.',
        rationale: 'In general, `process.env` statements aren\'t appropriate for production code.',
        optionsDescription: 'Not configurable.',
        options: null,
        optionExamples: [true],
        type: 'functionality',
        typescriptOnly: false
    };
    Rule.FAILURE_STRING = 'Use of process.env statements is forbidden. Use our decorated Env class instead';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    return typescript_1.forEachChild(ctx.sourceFile, function cb(node) {
        if (tsutils_1.isPropertyAccessExpression(node) &&
            tsutils_1.isIdentifier(node.expression) &&
            node.expression.text === "process" &&
            node.name.text === 'env') {
            ctx.addFailureAtNode(node.expression, Rule.FAILURE_STRING);
        }
        return typescript_1.forEachChild(node, cb);
    });
}
