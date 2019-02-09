
        import { Canonical } from '../Scalar/Canonical';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';

        export enum ElementDefinitionConstraintSeverityKind {
                error,
warning
            }

        /**
         * Captures constraints on each element within the resource, profile, or extension. 
         */
        export class ElementDefinition_Constraint  {

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
                 * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
                 */
                key? : Id;
                

                /**
                 * Extensions for key
                 */
                _key? : Element;
                

                /**
                 * Description of why this constraint is necessary or appropriate.
                 */
                requirements? : string;
                

                /**
                 * Extensions for requirements
                 */
                _requirements? : Element;
                

                /**
                 * Identifies the impact constraint violation has on the conformance of the instance.
                 */
                severity? : ElementDefinitionConstraintSeverityKind;
                

                /**
                 * Extensions for severity
                 */
                _severity? : Element;
                

                /**
                 * Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
                 */
                human? : string;
                

                /**
                 * Extensions for human
                 */
                _human? : Element;
                

                /**
                 * A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met.
                 */
                expression? : string;
                

                /**
                 * Extensions for expression
                 */
                _expression? : Element;
                

                /**
                 * An XPath expression of constraint that can be executed to see if this constraint is met.
                 */
                xpath? : string;
                

                /**
                 * Extensions for xpath
                 */
                _xpath? : Element;
                

                /**
                 * A reference to the original source of the constraint, for traceability purposes.
                 */
                source? : Canonical;
                
        }
        