import {ModuleWithProviders} from '@angular/core';

export interface Environment {
  production: boolean;
  ngxsPlugins: ModuleWithProviders<any>[];
}
