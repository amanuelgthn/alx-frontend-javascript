export interface MajorCredits {
    credits: number;
    brand: "Major";
}

export interface MinorCredits {
    credits: number;
    brand: "Minor";
}

function sumMajorCredits (
    subject1: MajorCredits,
    subject2: MajorCredits
    ): MajorCredits {
        const sum = subject1.credits + subject2.credits;
        const obj: MajorCredits = {
            credits: sum,
            brand: "Major",
        };
        return obj;
}

function sumMinorCredits (
    subject1: MinorCredits,
    subject2: MinorCredits
): MinorCredits {
    const sum = subject1.credits + subject2.credits;
    const obj: MinorCredits = {
        credits: sum,
        brand: "Minor",
    };
    return obj;
}