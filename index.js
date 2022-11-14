import * as utils from "./helpers.js";
export const helpers = utils;
export const π = Math.PI;
export const e = Math.E;
/*export const φ = 1.61803398874989484820;
export const μ = 1.84775906502257351225;
export const ϖ = 2.62205755429211981046;
export const Γ = 0.57721566490153286060;
export const Ω = 0.56714329040978387299;*/

function sum(l=[]) {
    return l.reduce((a,b)=>b+a);
};
/**
 * Basic summation formula.
 * @param {number[]} l - Array of the numbers you want to sum.
 * @param {number} n - Ending index. Defaults to the last value's index.
 * @param {number} i - Starting index. Defaults to `1`
 * @return {number} The summed numbers.
 */
export function Σ(l,n,i=1) {
    return sum(l.slice(i-1, (n?n:l.length)-1));
};

/**
 * Delta function.
 * @param {number} a - Start value.
 * @param {number} b - End value.
 * @return {number} The change.
 */
export function Δ(a, b) {
    return b-a;
};

/**
 * Speed function.
 * @param {number} distance - The total distance travelled (any unit, value `u`).
 * @param {number} time - The total time taken to travel (value `s`).
 * @return {number} The speed, measured in `u/s`
 */
export function getSpeed(distance, time = 1) {
    return distance/time;
};

export function force(mass, acceleration) {
    return mass*acceleration;
};

export function momentum(mass, speed) {
    return mass*speed;
};

export function density(mass, volume) {
    return mass/volume;
};

export function weight(mass, gravity=9.8) {
    return mass*gravity;
};

export function work(force, distance) {
    return force*distance;
};

export function power(work, time) {
    return work/time;
};

export function mechanicalAdvantage(input, output) {
    return output/input;
};

export function kineticEnergy(mass, velocity) {
    return 0.5*mass*(velocity**2);
};

export function waveSpeed(frequency, wavelength) {
    return frequency*wavelength;
};

export function energy(mass, C, temp1, temp2) {
    return mass*C*Δ(temp1, temp2);
};

export function horsepower(torque, speed) {
    return (torque*speed)/5252;
};

export function displacement(initVelocity, finalVelocity, time) {
    return 0.5*(initVelocity+finalVelocity)*time;
};
