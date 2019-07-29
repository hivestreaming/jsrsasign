export class RSAKey {
  setPublic(modulus: string, exponent: string): void;
  verifyString(value: string, signature: string): boolean;
}

export class Signature { }

export class BigInteger { }

export class MessageDigest { }

export const CryptoJS: CryptoJS.CryptoJSStatic;

export function b64tohex(value: string): any;

export function b64toBA(value: string): any;
