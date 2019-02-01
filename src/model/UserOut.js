/**
 * Insights Service Approval APIs
 * APIs to query approval service
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserOut model module.
 * @module model/UserOut
 * @version 1.0.0
 */
class UserOut {
    /**
     * Constructs a new <code>UserOut</code>.
     * Input parameters for User object
     * @alias module:model/UserOut
     */
    constructor() { 
        
        UserOut.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserOut</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserOut} obj Optional instance to populate.
     * @return {module:model/UserOut} The populated <code>UserOut</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserOut();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('group_ids')) {
                obj['group_ids'] = ApiClient.convertToType(data['group_ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
UserOut.prototype['id'] = undefined;

/**
 * Email address of the user
 * @member {String} email
 */
UserOut.prototype['email'] = undefined;

/**
 * @member {String} first_name
 */
UserOut.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
UserOut.prototype['last_name'] = undefined;

/**
 * @member {Array.<Number>} group_ids
 */
UserOut.prototype['group_ids'] = undefined;






export default UserOut;

