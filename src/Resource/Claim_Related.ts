
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Reference } from '../Resource/Reference';

        

        /**
         * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery. 
         */
        export class Claim_Related  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Other claims which are related to this claim such as prior claim versions or for related services.
                 */
                claim? : Reference;
                

                /**
                 * For example, prior or umbrella.
                 */
                relationship? : CodeableConcept;
                

                /**
                 * An alternate organizational reference to the case or file to which this particular claim pertains - e.g. Property/Casualty insurer claim # or Workers Compensation case # .
                 */
                reference? : Identifier;
                
        }
        