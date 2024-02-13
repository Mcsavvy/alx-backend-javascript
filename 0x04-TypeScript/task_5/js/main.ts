export interface MajorCredits {
    credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
    credits: number & { __brand: 'MinorCredits.credits' };
}

export function sumMinorCredits( subject1: MinorCredits, subject2: MinorCredits) : MinorCredits {
  const val: number = subject1.credits + subject2.credits;
  const result = { credits: val };
  return result as MinorCredits;
}

export function sumMajorCredits( subject1: MajorCredits, subject2: MajorCredits) : MajorCredits {
  const val: number = subject1.credits + subject2.credits;
  const result = { credits: val };
  return result as MajorCredits;
}
