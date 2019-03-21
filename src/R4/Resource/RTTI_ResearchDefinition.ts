
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';

import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_RelatedArtifact, IRelatedArtifact } from './RTTI_RelatedArtifact';

import { createEnumType } from '../../EnumType'

export enum ResearchDefinitionStatusKind {
    draft = 'draft',
    active = 'active',
    retired = 'retired',
    unknown = 'unknown'
}


export interface IResearchDefinition {

    /**
     * This is a ResearchDefinition resource
     */
    resourceType: 'ResearchDefinition';


    /**
     * A reference to a ResearchElementDefinition resource that defines the population for the research.
     */
    population: IReference;


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * An absolute URI that is used to identify this research definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this research definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the research definition is stored on different servers.
     */
    url?: string;


    /**
     * Extensions for url
     */
    _url?: IElement;


    /**
     * A formal identifier that is used to identify this research definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: IIdentifier[];


    /**
     * The identifier that is used to identify this version of the research definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the research definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
     */
    version?: string;


    /**
     * Extensions for version
     */
    _version?: IElement;


    /**
     * A natural language name identifying the research definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;


    /**
     * Extensions for name
     */
    _name?: IElement;


    /**
     * A short, descriptive, user-friendly title for the research definition.
     */
    title?: string;


    /**
     * Extensions for title
     */
    _title?: IElement;


    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string;


    /**
     * Extensions for shortTitle
     */
    _shortTitle?: IElement;


    /**
     * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
     */
    subtitle?: string;


    /**
     * Extensions for subtitle
     */
    _subtitle?: IElement;


    /**
     * The status of this research definition. Enables tracking the life-cycle of the content.
     */
    status?: ResearchDefinitionStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * A Boolean value to indicate that this research definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;


    /**
     * Extensions for experimental
     */
    _experimental?: IElement;


    /**
     * The intended subjects for the ResearchDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchDefinition can be anything.
     */
    subjectCodeableConcept?: ICodeableConcept;


    /**
     * The intended subjects for the ResearchDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchDefinition can be anything.
     */
    subjectReference?: IReference;


    /**
     * The date  (and optionally time) when the research definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the research definition changes.
     */
    date?: string;


    /**
     * Extensions for date
     */
    _date?: IElement;


    /**
     * The name of the organization or individual that published the research definition.
     */
    publisher?: string;


    /**
     * Extensions for publisher
     */
    _publisher?: IElement;


    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: IContactDetail[];


    /**
     * A free text natural language description of the research definition from a consumer's perspective.
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: string[];


    /**
     * Extensions for comment
     */
    _comment?: IElement[];


    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate research definition instances.
     */
    useContext?: IUsageContext[];


    /**
     * A legal or geographic region in which the research definition is intended to be used.
     */
    jurisdiction?: ICodeableConcept[];


    /**
     * Explanation of why this research definition is needed and why it has been designed as it has.
     */
    purpose?: string;


    /**
     * Extensions for purpose
     */
    _purpose?: IElement;


    /**
     * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
     */
    usage?: string;


    /**
     * Extensions for usage
     */
    _usage?: IElement;


    /**
     * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
     */
    copyright?: string;


    /**
     * Extensions for copyright
     */
    _copyright?: IElement;


    /**
     * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
     */
    approvalDate?: string;


    /**
     * Extensions for approvalDate
     */
    _approvalDate?: IElement;


    /**
     * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
     */
    lastReviewDate?: string;


    /**
     * Extensions for lastReviewDate
     */
    _lastReviewDate?: IElement;


    /**
     * The period during which the research definition content was or is planned to be in active use.
     */
    effectivePeriod?: IPeriod;


    /**
     * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
     */
    topic?: ICodeableConcept[];


    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: IContactDetail[];


    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: IContactDetail[];


    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: IContactDetail[];


    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: IContactDetail[];


    /**
     * Related artifacts such as additional documentation, justification, or bibliographic references.
     */
    relatedArtifact?: IRelatedArtifact[];


    /**
     * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
     */
    library?: string[];


    /**
     * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
     */
    exposure?: IReference;


    /**
     * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
     */
    exposureAlternative?: IReference;


    /**
     * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
     */
    outcome?: IReference;

}



export const RTTI_ResearchDefinition: t.Type<IResearchDefinition> = t.recursion('IResearchDefinition', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('ResearchDefinition'),
            population: RTTI_Reference
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            url: t.string,
            _url: RTTI_Element,
            identifier: t.array(RTTI_Identifier),
            version: t.string,
            _version: RTTI_Element,
            name: t.string,
            _name: RTTI_Element,
            title: t.string,
            _title: RTTI_Element,
            shortTitle: t.string,
            _shortTitle: RTTI_Element,
            subtitle: t.string,
            _subtitle: RTTI_Element,
            status: createEnumType<ResearchDefinitionStatusKind>(ResearchDefinitionStatusKind, 'ResearchDefinitionStatusKind'),
            _status: RTTI_Element,
            experimental: t.boolean,
            _experimental: RTTI_Element,
            subjectCodeableConcept: RTTI_CodeableConcept,
            subjectReference: RTTI_Reference,
            date: t.string,
            _date: RTTI_Element,
            publisher: t.string,
            _publisher: RTTI_Element,
            contact: t.array(RTTI_ContactDetail),
            description: t.string,
            _description: RTTI_Element,
            comment: t.array(t.string),
            _comment: t.array(RTTI_Element),
            useContext: t.array(RTTI_UsageContext),
            jurisdiction: t.array(RTTI_CodeableConcept),
            purpose: t.string,
            _purpose: RTTI_Element,
            usage: t.string,
            _usage: RTTI_Element,
            copyright: t.string,
            _copyright: RTTI_Element,
            approvalDate: t.string,
            _approvalDate: RTTI_Element,
            lastReviewDate: t.string,
            _lastReviewDate: RTTI_Element,
            effectivePeriod: RTTI_Period,
            topic: t.array(RTTI_CodeableConcept),
            author: t.array(RTTI_ContactDetail),
            editor: t.array(RTTI_ContactDetail),
            reviewer: t.array(RTTI_ContactDetail),
            endorser: t.array(RTTI_ContactDetail),
            relatedArtifact: t.array(RTTI_RelatedArtifact),
            library: t.array( t.string ),
            exposure: RTTI_Reference,
            exposureAlternative: RTTI_Reference,
            outcome: RTTI_Reference
        })

    ])
);

