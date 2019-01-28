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
import Decision from './Decision';
import State from './State';

/**
 * The Request model module.
 * @module model/Request
 * @version 1.0.0
 */
class Request {
    /**
     * Constructs a new <code>Request</code>.
     * Approval request. Each request will associate with a workflow. Corresponding to the groups of the associated workflow, every request will have a list of stages to record the request processing details.
     * @alias module:model/Request
     * @param requester {String} Requester info
     * @param name {String} Request name
     * @param content {Object} JSON object with request content
     */
    constructor(requester, name, content) { 
        
        Request.initialize(this, requester, name, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requester, name, content) { 
        obj['requester'] = requester;
        obj['name'] = name;
        obj['content'] = content;
    }

    /**
     * Constructs a <code>Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request} obj Optional instance to populate.
     * @return {module:model/Request} The populated <code>Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Request();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('requester')) {
                obj['requester'] = ApiClient.convertToType(data['requester'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = State.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('decision')) {
                obj['decision'] = Decision.constructFromObject(data['decision']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], Object);
            }
            if (data.hasOwnProperty('workflow_id')) {
                obj['workflow_id'] = ApiClient.convertToType(data['workflow_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Request.prototype['id'] = undefined;

/**
 * Requester info
 * @member {String} requester
 */
Request.prototype['requester'] = undefined;

/**
 * Request name
 * @member {String} name
 */
Request.prototype['name'] = undefined;

/**
 * Request description
 * @member {String} description
 */
Request.prototype['description'] = undefined;

/**
 * @member {module:model/State} state
 */
Request.prototype['state'] = undefined;

/**
 * @member {module:model/Decision} decision
 */
Request.prototype['decision'] = undefined;

/**
 * Comments for requests
 * @member {String} reason
 */
Request.prototype['reason'] = undefined;

/**
 * JSON object with request content
 * @member {Object} content
 */
Request.prototype['content'] = undefined;

/**
 * Associate workflow id
 * @member {String} workflow_id
 */
Request.prototype['workflow_id'] = undefined;






export default Request;

