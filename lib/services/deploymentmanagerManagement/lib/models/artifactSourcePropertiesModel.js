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
 * The properties that define the source location where the artifacts are
 * located.
 *
 */
class ArtifactSourcePropertiesModel {
  /**
   * Create a ArtifactSourcePropertiesModel.
   * @member {string} sourceType The type of artifact source used.
   * @member {string} [artifactRoot] The path from the location that the
   * 'authentication' property [say, a SAS URI to the blob container] refers
   * to, to the location of the artifacts. This can be used to differentiate
   * different versions of the artifacts. Or, different types of artifacts like
   * binaries or templates. The location referenced by the authentication
   * property concatenated with this optional artifactRoot path forms the
   * artifact source location where the artifacts are expected to be found.
   * @member {object} authentication The authentication method to use to access
   * the artifact source.
   * @member {string} [authentication.type] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ArtifactSourcePropertiesModel
   *
   * @returns {object} metadata of ArtifactSourcePropertiesModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArtifactSourceProperties',
      type: {
        name: 'Composite',
        className: 'ArtifactSourcePropertiesModel',
        modelProperties: {
          sourceType: {
            required: true,
            serializedName: 'sourceType',
            type: {
              name: 'String'
            }
          },
          artifactRoot: {
            required: false,
            serializedName: 'artifactRoot',
            type: {
              name: 'String'
            }
          },
          authentication: {
            required: true,
            serializedName: 'authentication',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'Authentication',
              className: 'Authentication'
            }
          }
        }
      }
    };
  }
}

module.exports = ArtifactSourcePropertiesModel;