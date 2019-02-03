
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        export enum ConceptMap_UnmappedModeKind {
                provided,
fixed,
otherMap
            }

        /**
         * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. 
         */
        export class ConceptMap_Unmapped  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
                 */
                Mode? : ConceptMap_UnmappedModeKind;
                

                /**
                 * Extensions for mode
                 */
                _mode? : Element;
                

                /**
                 * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
                 */
                Code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * The display for the code. The display is only provided to help editors when editing the concept map.
                 */
                Display? : String;
                

                /**
                 * Extensions for display
                 */
                _display? : Element;
                

                /**
                 * The canonical URI of an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
                 */
                Url? : Canonical;
                
        }
        