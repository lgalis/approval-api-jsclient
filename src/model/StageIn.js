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
 * The StageIn model module.
 * @module model/StageIn
 * @version 1.0.0
 */
class StageIn {
    /**
     * Constructs a new <code>StageIn</code>.
     * Input parameters for stage object
     * @alias module:model/StageIn
     * @param groupId {String} Associated group id
     * @param state {module:model/StageIn.StateEnum} The state of stage or request. It may be one of values (pending, skipped, notified or finished)
     * @param decision {module:model/StageIn.DecisionEnum} Final decision, may be one of the value (undecided, approved, or denied)
     */
    constructor(groupId, state, decision) { 
        
        StageIn.initialize(this, groupId, state, decision);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupId, state, decision) { 
        obj['group_id'] = groupId;
        obj['state'] = state;
        obj['decision'] = decision;
    }

    /**
     * Constructs a <code>StageIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StageIn} obj Optional instance to populate.
     * @return {module:model/StageIn} The populated <code>StageIn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StageIn();

            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('decision')) {
                obj['decision'] = ApiClient.convertToType(data['decision'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Associated group id
 * @member {String} group_id
 */
StageIn.prototype['group_id'] = undefined;

/**
 * The state of stage or request. It may be one of values (pending, skipped, notified or finished)
 * @member {module:model/StageIn.StateEnum} state
 * @default 'pending'
 */
StageIn.prototype['state'] = 'pending';

/**
 * Final decision, may be one of the value (undecided, approved, or denied)
 * @member {module:model/StageIn.DecisionEnum} decision
 * @default 'undecided'
 */
StageIn.prototype['decision'] = 'undecided';





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
StageIn['StateEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "skipped"
     * @const
     */
    "skipped": "skipped",

    /**
     * value: "notified"
     * @const
     */
    "notified": "notified",

    /**
     * value: "finished"
     * @const
     */
    "finished": "finished"
};


/**
 * Allowed values for the <code>decision</code> property.
 * @enum {String}
 * @readonly
 */
StageIn['DecisionEnum'] = {

    /**
     * value: "undecided"
     * @const
     */
    "undecided": "undecided",

    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",

    /**
     * value: "denied"
     * @const
     */
    "denied": "denied"
};



export default StageIn;
