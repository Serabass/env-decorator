import * as Lint from 'tslint';
import { isIdentifier, isPropertyAccessExpression } from "tsutils";
import { forEachChild, Node, SourceFile } from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
  /* tslint:disable:object-literal-sort-keys */
  public static metadata: Lint.IRuleMetadata = {
    ruleName: 'no-process-env',
    description: 'Disallows `process.env` statements.',
    rationale: 'In general, `process.env` statements aren\'t appropriate for production code.',
    optionsDescription: 'Not configurable.',
    options: null,
    optionExamples: [true],
    type: 'functionality',
    typescriptOnly: false,
  };
  /* tslint:enable:object-literal-sort-keys */

  public static FAILURE_STRING: string = 'Use of process.env statements is forbidden. Use your decorated Env class instead';

  public apply(sourceFile: SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }
}

function walk(ctx: Lint.WalkContext) {
  return forEachChild(ctx.sourceFile, function cb(node: Node): void {
    if (
      isPropertyAccessExpression(node) &&
      isIdentifier(node.expression) &&
      node.expression.text === "process" &&
      node.name.text === 'env'
    ) {
      ctx.addFailureAtNode(node.expression, Rule.FAILURE_STRING);
    }

    return forEachChild(node, cb);
  });
}
