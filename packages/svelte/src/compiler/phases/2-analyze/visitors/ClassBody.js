/** @import { ClassBody } from 'estree' */
/** @import { Context } from '../types' */

/**
 * @param {ClassBody} node
 * @param {Context} context
 */
export function ClassBody(node, context) {
	context.next({ ...context.state });
}
