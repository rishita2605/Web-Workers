import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";
import { heavyComputation, PROCESS_STATUS } from '../util.js'

const api = {
  calculateFibonacci: function (n) {
    let num1 = 0, num2 = 1, num3

    for (let i = 2; i <= n; i++) {
      num3 = num1 + num2
      num1 = num2
      num2 = num3
    }

    return num3
  },
  computationallyHeavyFunction: function (n) {
    heavyComputation(n)
    return PROCESS_STATUS.COMPLETED
  }
}

Comlink.expose(api)