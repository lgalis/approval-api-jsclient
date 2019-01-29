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


import ApiClient from "../ApiClient";
import Action from '../model/Action';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add an action to a given stage
     * Add an action to a given stage
     * @param {Number} stageId Id of stage
     * @param {module:model/Action} action Action object that will be added
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Action} and HTTP response
     */
    addActionWithHttpInfo(stageId, action) {
      let postBody = action;

      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling addAction");
      }

      // verify the required parameter 'action' is set
      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling addAction");
      }


      let pathParams = {
        'stage_id': stageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Action;

      return this.apiClient.callApi(
        '/stages/{stage_id}/actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add an action to a given stage
     * Add an action to a given stage
     * @param {Number} stageId Id of stage
     * @param {module:model/Action} action Action object that will be added
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Action}
     */
    addAction(stageId, action) {
      return this.addActionWithHttpInfo(stageId, action)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return an user action by id
     * Return an user action by id
     * @param {Number} id Query by id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Action} and HTTP response
     */
    fetchActionByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fetchActionById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Action;

      return this.apiClient.callApi(
        '/actions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return an user action by id
     * Return an user action by id
     * @param {Number} id Query by id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Action}
     */
    fetchActionById(id) {
      return this.fetchActionByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return a list of user actions
     * Return a list of user actions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 1000) (default to 20)
     * @param {Number} opts.offset Starting Offset (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Action>} and HTTP response
     */
    fetchActionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Action];

      return this.apiClient.callApi(
        '/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return a list of user actions
     * Return a list of user actions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 1000) (default to 20)
     * @param {Number} opts.offset Starting Offset (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Action>}
     */
    fetchActions(opts) {
      return this.fetchActionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}