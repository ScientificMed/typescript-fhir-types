
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * A detailed description of a device, typically as part of a regulated medicinal product. It is not intended to replace the Device resource, which covers use of device instances. 
         */
        export class MedicinalProductDeviceSpec_Material  {

            constructor() {
                this.substance = new CodeableConcept();
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
                 * The substance.
                 */
                substance : CodeableConcept;
                

                /**
                 * Indicates an alternative material of the device.
                 */
                alternate? : boolean;
                

                /**
                 * Extensions for alternate
                 */
                _alternate? : Element;
                

                /**
                 * Whether the substance is a known or suspected allergen.
                 */
                allergenicIndicator? : boolean;
                

                /**
                 * Extensions for allergenicIndicator
                 */
                _allergenicIndicator? : Element;
                
        }
        