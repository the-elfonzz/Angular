import { AppRautingModule } from './app-rauting.module';

describe('AppRautingModule', () => {
  let appRautingModule: AppRautingModule;

  beforeEach(() => {
    appRautingModule = new AppRautingModule();
  });

  it('should create an instance', () => {
    expect(appRautingModule).toBeTruthy();
  });
});
