
        import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. 
         */
        export class ImagingStudy_Instance  {

            constructor() {
                this.identifier = new Identifier();
this.sopClass = new Coding();
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
                 * Formal identifier for this image or other content.
                 */
                identifier : Identifier;
                

                /**
                 * The number of instance in the series.
                 */
                number? : UnsignedInt;
                

                /**
                 * Extensions for number
                 */
                _number? : Element;
                

                /**
                 * DICOM instance  type.
                 */
                sopClass : Coding;
                

                /**
                 * The description of the instance.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                
        }
        