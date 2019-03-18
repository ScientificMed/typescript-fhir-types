
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';




            export interface IConsent_Verification {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Has the instruction been verified.
                     */
                    verified? : boolean;
                    

                    /**
                     * Extensions for verified
                     */
                    _verified? : IElement;
                    

                    /**
                     * Who verified the instruction (Patient, Relative or other Authorized Person).
                     */
                    verifiedWith? : IReference;
                    

                    /**
                     * Date verification was collected.
                     */
                    verificationDate? : string;
                    

                    /**
                     * Extensions for verificationDate
                     */
                    _verificationDate? : IElement;
                    
            }
        


        export const RTTI_Consent_Verification: t.Type<IConsent_Verification> = t.recursion( 'IConsent_Verification', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
verified: t.boolean,
_verified: RTTI_Element,
verifiedWith: RTTI_Reference,
verificationDate: t.string,
_verificationDate: RTTI_Element
        })
        
        );
        

        