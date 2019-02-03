
        import { Base64Binary } from '../Scalar/Base64Binary';
import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Id } from '../Scalar/Id';
import { Meta } from '../Resource/Meta';
import { Reference } from '../Resource/Reference';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. 
         */
        export class Binary  {

            constructor() {
                
            }

            
                /**
                 * This is a Binary resource
                 */
                ResourceType: string = 'Binary;'
                

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
                 * MimeType of the binary content represented as a standard MimeType (BCP 13).
                 */
                ContentType? : Code;
                

                /**
                 * Extensions for contentType
                 */
                _contentType? : Element;
                

                /**
                 * This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. Media, DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient.
                 */
                SecurityContext? : Reference;
                

                /**
                 * The actual content, base64 encoded.
                 */
                Data? : Base64Binary;
                

                /**
                 * Extensions for data
                 */
                _data? : Element;
                
        }
        