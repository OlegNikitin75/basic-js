import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let maxDepth = 0
export default class DepthCalculator {
  calculateDepth(arr, curDepth = 1) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        maxDepth = this.calculateDepth(element, curDepth + 1)
      }
    });
    if (maxDepth > curDepth) {
      maxDepth = maxDepth

    } else maxDepth = curDepth

    let depthResult = maxDepth
    maxDepth = 0
    return depthResult
  }
}
