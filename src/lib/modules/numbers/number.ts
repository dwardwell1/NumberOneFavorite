import type { RadiansConstant, Radian } from "./types";


export const sigfigs = 100;

const sigFigMap = new Map<number, number>([
    [0, 1],
    [1, 10],
    [2, 100],
    [3, 1000],
    [4, 10000],
    [5, 100000],
    [6, 1000000],
]);

export const randomSign = (n: number = 1) => {
    const direction = Math.random() < 0.5 ? 1 : -1;
    return n * direction;
}

export const randomDecimal = (mantissaLength = 2): number => {
    const mantissa = sigFigMap.get(mantissaLength)!;
    const result = Math.floor(Math.random() * mantissa) / mantissa;
    return result;
}

export const randomNumber = (n: number): number => {
    return Math.floor(Math.random() * n);
    
}

export const clamp = (min: number, medial: number, max: number): number => {
    const belowMax = Math.min(max, medial);
    const aboveMinAndBelowMax = Math.max(belowMax, min);
    return aboveMinAndBelowMax;
};

export const variance = (center: number, range: number) => {
    const signedRange = range * randomSign(1);
    return center + signedRange;
}
export const range = (min: number, max: number): number => {
    const range = max - min;
    return min + randomNumber(range);
}

export const randomAngle = (minRadian: Radian = Radians.Min, maxRadian: Radian = Radians.Max): Radian => {
    const randomRadian = Math.random() * (maxRadian - minRadian) + minRadian;
    return randomRadian;
}

export const randomConicalAngle = (startAngle: Radian, endAngle: Radian, ): Radian => {

    // case: allow passing in negatives to ease cones. -20, 20 => 40
    const adjustedStart = Math.abs(startAngle < 0 ? 360 - startAngle : startAngle);
    const adjustedEnd = Math.abs(endAngle < 0 ? 360 - endAngle : endAngle);

    let range = adjustedEnd - adjustedStart;

    if (range < 0) {
        range = Math.abs((360 + endAngle) - startAngle);
    }

    const result = randomAngle(startAngle, startAngle + range);

    return result % 360;
}

export const Radians: RadiansConstant = {
    Min: 0,
    Max: (2 * Math.PI),
    Half: Math.PI,
    North: 0,
    East: Math.PI / 2,
    South: Math.PI,
    West: (3 * Math.PI) / 2,
}