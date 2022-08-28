import { Injectable } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';
@Injectable()
export class AppService {
  getHello(i18n: I18nContext): string {
    console.log("Language" , i18n.lang)
    return i18n.t('test.hello');
  }
}
