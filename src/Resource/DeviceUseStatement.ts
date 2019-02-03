
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
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
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';

        export enum DeviceUseStatementStatusKind {
                active,
completed,
enteredInError,
intended,
stopped,
onHold
            }

        /**
         * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. 
         */
        export class DeviceUseStatement  {

            constructor() {
                this.Subject = new Reference();
this.Device = new Reference();
            }

            
                /**
                 * This is a DeviceUseStatement resource
                 */
                ResourceType: string = 'DeviceUseStatement;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * An external identifier for this statement such as an IRI.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
                 */
                Status? : DeviceUseStatementStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The patient who used the device.
                 */
                Subject : Reference;
                

                /**
                 * Allows linking the DeviceUseStatement to the underlying Request, or to other information that supports or is used to derive the DeviceUseStatement.
                 */
                DerivedFrom? : Array<Reference>;
                

                /**
                 * How often the device was used.
                 */
                TimingTiming? : Timing;
                

                /**
                 * How often the device was used.
                 */
                TimingPeriod? : Period;
                

                /**
                 * How often the device was used.
                 */
                TimingDateTime? : String;
                

                /**
                 * Extensions for timingDateTime
                 */
                _timingDateTime? : Element;
                

                /**
                 * The time at which the statement was made/recorded.
                 */
                RecordedOn? : DateTime;
                

                /**
                 * Extensions for recordedOn
                 */
                _recordedOn? : Element;
                

                /**
                 * Who reported the device was being used by the patient.
                 */
                Source? : Reference;
                

                /**
                 * The details of the device used.
                 */
                Device : Reference;
                

                /**
                 * Reason or justification for the use of the device.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Indicates another resource whose existence justifies this DeviceUseStatement.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
                 */
                BodySite? : CodeableConcept;
                

                /**
                 * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
                 */
                Note? : Array<Annotation>;
                
        }
        