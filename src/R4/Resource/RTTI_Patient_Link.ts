
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Element, IElement } from './RTTI_Element';
import { createEnumType } from '../../EnumType';

export enum Patient_LinkTypeKind {
    replacedBy = 'replaced-by',
    replaces = 'replaces',
    refer = 'refer',
    seealso = 'seealso'
}
/*
const Patient_LinkTypeKindKeys = t.keyof({
    [Patient_LinkTypeKind.replacedBy]: null,
    [Patient_LinkTypeKind.replaces]: null,
    [Patient_LinkTypeKind.refer]: null,
    [Patient_LinkTypeKind.seealso]: null
});*/


export interface IPatient_Link {

    /**
     * The other patient resource that the link refers to.
     */
    other: IReference;


    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;


    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * The type of link between this patient resource and another patient resource.
     */
    type?: Patient_LinkTypeKind;


    /**
     * Extensions for type
     */
    _type?: IElement;

}



export const RTTI_Patient_Link: t.Type<IPatient_Link> = t.recursion('IPatient_Link', () =>
    t.intersection([

        t.type({
            other: RTTI_Reference
        })
        ,

        t.partial({
            id: t.string,
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            type: createEnumType<Patient_LinkTypeKind>(Patient_LinkTypeKind, 'Patient_LinkTypeKind'),
            _type: RTTI_Element
        })

    ])
);


