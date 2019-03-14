
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
description: t.string,
_description: RTTI_Element,
during: RTTI_Period
        });
        

        export var RTTI_HealthcareService_NotAvailable:any = t.intersection([mandatory, partial]);
        

export type IHealthcareService_NotAvailable = t.TypeOf<typeof RTTI_HealthcareService_NotAvailable>;
        
        