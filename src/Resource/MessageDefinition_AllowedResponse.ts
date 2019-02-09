
        import { Canonical } from '../Scalar/Canonical';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Markdown } from '../Scalar/Markdown';

        

        /**
         * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. 
         */
        export class MessageDefinition_AllowedResponse  {

            constructor() {
                this.message = new Canonical();
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
                 * A reference to the message definition that must be adhered to by this supported response.
                 */
                message : Canonical;
                

                /**
                 * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
                 */
                situation? : Markdown;
                

                /**
                 * Extensions for situation
                 */
                _situation? : Element;
                
        }
        