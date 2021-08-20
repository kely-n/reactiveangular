import Storage from './storage.wrapper';

enum Locals {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  PARTNER_CODE = 'partner_code'
}

export class Tokens extends Storage<Locals> {
  private static instance?: Tokens;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Tokens();
    }

    return this.instance;
  }

  public getAccessToken() {
    return this.get(Locals.ACCESS_TOKEN);
  }

  public setAccessToken(accessToken: string) {
    this.set(Locals.ACCESS_TOKEN, accessToken);
  }

  public getRefreshToken() {
    return this.get(Locals.REFRESH_TOKEN);
  }

  public setRefreshToken(refreshToken: string) {
    this.set(Locals.REFRESH_TOKEN, refreshToken);
  }

  public clear() {
    this.clearItems([Locals.ACCESS_TOKEN, Locals.REFRESH_TOKEN, Locals.PARTNER_CODE]);
  }

  public setPatnerCode(partnerCode: string) {
    this.set(Locals.PARTNER_CODE, partnerCode);
  }

  public getPartnerCode() {
    return this.get(Locals.PARTNER_CODE);
  }
}