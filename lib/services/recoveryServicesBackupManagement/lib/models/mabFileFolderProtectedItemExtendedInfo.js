/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the MabFileFolderProtectedItemExtendedInfo class.
 * @constructor
 * Additional information for the backup item.
 *
 * @member {date} [lastRefreshedAt] The last day and time the agent synced with
 * the service.
 *
 * @member {date} [oldestRecoveryPoint] The oldest backup copy available.
 *
 * @member {number} [recoveryPointCount] The number of backup copies associated
 * with the backup item.
 *
 */
class MabFileFolderProtectedItemExtendedInfo {
  constructor() {
  }

  /**
   * Defines the metadata of MabFileFolderProtectedItemExtendedInfo
   *
   * @returns {object} metadata of MabFileFolderProtectedItemExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MabFileFolderProtectedItemExtendedInfo',
      type: {
        name: 'Composite',
        className: 'MabFileFolderProtectedItemExtendedInfo',
        modelProperties: {
          lastRefreshedAt: {
            required: false,
            serializedName: 'lastRefreshedAt',
            type: {
              name: 'DateTime'
            }
          },
          oldestRecoveryPoint: {
            required: false,
            serializedName: 'oldestRecoveryPoint',
            type: {
              name: 'DateTime'
            }
          },
          recoveryPointCount: {
            required: false,
            serializedName: 'recoveryPointCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = MabFileFolderProtectedItemExtendedInfo;