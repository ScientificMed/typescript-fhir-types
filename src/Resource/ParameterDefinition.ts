
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';

        

        /**
         * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. 
         */
        export class ParameterDefinition  {

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
                 * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
                 */
                name? : Code;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Whether the parameter is input or output for the module.
                 */
                use? : Code;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * The minimum number of times this parameter SHALL appear in the request or response.
                 */
                min? : Integer;
                

                /**
                 * Extensions for min
                 */
                _min? : Element;
                

                /**
                 * The maximum number of times this element is permitted to appear in the request or response.
                 */
                max? : string;
                

                /**
                 * Extensions for max
                 */
                _max? : Element;
                

                /**
                 * A brief discussion of what the parameter is for and how it is used by the module.
                 */
                documentation? : string;
                

                /**
                 * Extensions for documentation
                 */
                _documentation? : Element;
                

                /**
                 * The type of the parameter.
                 */
                type? : Code;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
                 */
                profile? : Canonical;
                
        }
        