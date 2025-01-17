/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Name of the item.
 */
export type TheNameSchema = string
/**
 * This is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.
 */
export type TheImageSchema = string
/**
 * aw SVG image data, if you want to generate images on the fly (not recommended). Only use this if you're not including the image parameter.
 */
export type RawSVGImageData = string
/**
 * A human readable description of the item. Markdown is supported.
 */
export type TheDescriptionSchema = string
/**
 * his is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.
 */
export type TheExternalUrlSchema = string
/**
 * Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #.
 */
export type BackgroundColor = string
/**
 * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA. Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
 */
export type AnimationUrl = string
/**
 * A URL to a YouTube video.
 */
export type YouTubeVideo = string

export interface NftMetadata {
  name?: TheNameSchema
  image?: TheImageSchema
  image_data?: RawSVGImageData
  attributes?: Array<{
    value: number | string
    trait_type: string
    display_type?: string
    [k: string]: unknown
  }>
  description?: TheDescriptionSchema
  external_url?: TheExternalUrlSchema
  background_color?: BackgroundColor
  animation_url?: AnimationUrl
  youtube_url?: YouTubeVideo
  [k: string]: unknown
}
