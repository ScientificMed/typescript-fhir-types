
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { CoverageEligibilityResponse_Error } from '../Resource/CoverageEligibilityResponse_Error';
import { CoverageEligibilityResponse_Insurance } from '../Resource/CoverageEligibilityResponse_Insurance';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum CoverageEligibilityResponsePurposeKind {
                authRequirements,
benefits,
discovery,
validation
            }
export enum CoverageEligibilityResponseOutcomeKind {
                queued,
complete,
error,
partial
            }

        /**
         * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. 
         */
        export class CoverageEligibilityResponse  {

            constructor() {
                
            }

            
                /**
                 * This is a CoverageEligibilityResponse resource
                 */
                resourceType: string = 'CoverageEligibilityResponse;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The Response business identifier.
                 */
                identifier? : Identifier[];
                

                /**
                 * The status of the resource instance.
                 */
                status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for th patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
                 */
                purpose? : CoverageEligibilityResponsePurposeKind[];
                

                /**
                 * Extensions for purpose
                 */
                _purpose? : Element[];
                

                /**
                 * Patient Resource.
                 */
                patient? : Reference;
                

                /**
                 * The date or dates when the enclosed suite of services are proposed and for which coverage details are requested.
                 */
                servicedDate? : string;
                

                /**
                 * Extensions for servicedDate
                 */
                _servicedDate? : Element;
                

                /**
                 * The date or dates when the enclosed suite of services are proposed and for which coverage details are requested.
                 */
                servicedPeriod? : Period;
                

                /**
                 * The date when the enclosed suite of services were performed or completed.
                 */
                created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * The provider who is responsible for the services rendered to the patient.
                 */
                requestProvider? : Reference;
                

                /**
                 * Original request resource reference.
                 */
                request? : Reference;
                

                /**
                 * Transaction status: error, complete.
                 */
                outcome? : CoverageEligibilityResponseOutcomeKind;
                

                /**
                 * Extensions for outcome
                 */
                _outcome? : Element;
                

                /**
                 * A description of the status of the adjudication.
                 */
                disposition? : string;
                

                /**
                 * Extensions for disposition
                 */
                _disposition? : Element;
                

                /**
                 * The Insurer who produced this adjudicated response.
                 */
                insurer? : Reference;
                

                /**
                 * The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
                 */
                insurance? : CoverageEligibilityResponse_Insurance[];
                

                /**
                 * A reference from the Insurer to which these services pertain.
                 */
                preAuthRef? : string;
                

                /**
                 * Extensions for preAuthRef
                 */
                _preAuthRef? : Element;
                

                /**
                 * The form to be used for printing the content.
                 */
                form? : CodeableConcept;
                

                /**
                 * Mutually exclusive with Services Provided (Item).
                 */
                error? : CoverageEligibilityResponse_Error[];
                
        }
        