/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The unique identifier of a tag
 */
export type TagIdentifier = string
export type ExtensionValue =
  | ExtensionPrimitiveValue
  | {
      [k: string]: ExtensionValueInner0
    }
export type ExtensionPrimitiveValue = string | boolean | number | null
export type ExtensionValueInner0 =
  | ExtensionPrimitiveValue
  | {
      [k: string]: ExtensionValueInner1
    }
export type ExtensionValueInner1 = ExtensionPrimitiveValue

/**
 * Schema for lists of tokens compatible with the Uniswap Interface
 */
export interface TokenList {
  /**
   * The name of the token list
   */
  name: string
  /**
   * The timestamp of this list version; i.e. when this immutable version of the list was created
   */
  timestamp: string
  version: Version
  /**
   * The list of tokens included in the list
   */
  tokens: Array<TokenInfo>
  /**
   * Keywords associated with the contents of the list; may be used in list discoverability
   */
  keywords?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
  /**
   * A mapping of tag identifiers to their name and description
   */
  tags?: {
    [k: string]: TagDefinition
  }
  /**
   * A URI for the logo of the token list; prefer SVG or PNG of size 256x256
   */
  logoURI?: string
}
/**
 * The version of the list, used in change detection
 */
export interface Version {
  /**
   * The major version of the list. Must be incremented when tokens are removed from the list or token addresses are changed.
   */
  major: number
  /**
   * The minor version of the list. Must be incremented when tokens are added to the list.
   */
  minor: number
  /**
   * The patch version of the list. Must be incremented for any changes to the list.
   */
  patch: number
}
/**
 * Metadata for a single token in a token list
 */
export interface TokenInfo {
  /**
   * The chain ID of the Ethereum network where this token is deployed
   */
  chainId: number
  /**
   * The checksummed address of the token on the specified chain ID
   */
  address: string
  /**
   * The number of decimals for the token balance
   */
  decimals: number
  /**
   * The name of the token
   */
  name: string
  /**
   * The symbol for the token; must be alphanumeric
   */
  symbol: string
  /**
   * A URI to the token logo asset; if not set, interface will attempt to find a logo based on the token address; suggest SVG or PNG of size 64x64
   */
  logoURI?: string
  /**
   * An array of tag identifiers associated with the token; tags are defined at the list level
   */
  tags?:
    | []
    | [TagIdentifier]
    | [TagIdentifier, TagIdentifier]
    | [TagIdentifier, TagIdentifier, TagIdentifier]
    | [TagIdentifier, TagIdentifier, TagIdentifier, TagIdentifier]
    | [TagIdentifier, TagIdentifier, TagIdentifier, TagIdentifier, TagIdentifier]
    | [TagIdentifier, TagIdentifier, TagIdentifier, TagIdentifier, TagIdentifier, TagIdentifier]
    | [
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier
      ]
    | [
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier
      ]
    | [
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier
      ]
    | [
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier,
        TagIdentifier
      ]
  extensions?: ExtensionMap
}
/**
 * An object containing any arbitrary or vendor-specific token metadata
 */
export interface ExtensionMap {
  [k: string]: ExtensionValue
}
/**
 * Definition of a tag that can be associated with a token via its identifier
 */
export interface TagDefinition {
  /**
   * The name of the tag
   */
  name: string
  /**
   * A user-friendly description of the tag
   */
  description: string
}
