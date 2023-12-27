/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */

import { EntryPoints } from "N/types";
import * as runtime from "N/runtime";
import * as log from "N/log";

export function getInputData(scriptContext: EntryPoints.MapReduce.getInputDataContext): any {
    const stLogTitle = 'getInputData';
    try {

        const scriptParam = getScriptParameters();
        const stParam = assertString(scriptParam['custscript_param']);

    } catch (error) {
        log.error(stLogTitle, error.message)
    }
}

export function map(scriptContext: EntryPoints.MapReduce.mapContext): any {
    const stLogTitle = 'map';
    try {

    } catch (error) {
        log.error(stLogTitle, error.message)
    }
}

export function summarize(scriptContext: EntryPoints.MapReduce.summarizeContext): any {
    const stLogTitle = 'summarize';
    try {

    } catch (error) {
        log.error(stLogTitle, error.message)
    }
}

//* Main functions
function getScriptParameters() {
    const stLogTitle = 'getScriptParameters';
    try {
        const objScript = runtime.getCurrentScript();
        const params = {};

        return params;
    } catch (error) {
        log.error(stLogTitle, error.message)
    }
}

//* Helper functions
export function assertString(value: any): string {
    const stLogTitle = 'assertString';
    try {
        if (typeof value !== 'string') {
            if (value === null) {
                return '';
            }
            throw new Error('Expected a string, recieved ' + typeof value + ' ' + value);
        }
        return value;
    } catch (error) {
        log.error(stLogTitle, error.message)
    }
}
